import { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import { motion, AnimatePresence } from 'framer-motion';

const CORS_PROXY = 'https://api.allorigins.win/get?url=';
const FEED_URL = encodeURIComponent('https://medium.com/feed/@martinsjavacode');
const ARTICLES_PER_PAGE = 5;

export default function Projects() {
    const [articles, setArticles] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`${CORS_PROXY}${FEED_URL}`);
                const data = await response.json();

                const parser = new Parser();
                const feed = await parser.parseString(data.contents);

                const sortedItems = feed.items.sort((a, b) => new Date(b.pubDate!).getTime() - new Date(a.pubDate!).getTime());
                setArticles(sortedItems);
            } catch (error) {
                console.error('Erro ao carregar feed do Medium:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
    const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-10 max-w-3xl mx-auto"
        >
            <h2 className="text-3xl font-bold mb-4">Artigos Publicados</h2>

            {loading ? (
                <ul className="space-y-4 animate-pulse">
                    {[...Array(ARTICLES_PER_PAGE)].map((_, i) => (
                        <li key={i} className="border-b pb-2">
                            <div className="h-5 bg-gray-300 rounded w-3/4 mb-1"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </li>
                    ))}
                </ul>
            ) : currentArticles.length > 0 ? (
                <ul className="space-y-6">
                    {currentArticles.map((item, index) => {
                        const thumbnailMatch = item['content:encoded']?.match(/<img[^>]+src="(.*?)"/);
                        const thumbnail = thumbnailMatch ? thumbnailMatch[1] : null;

                        return (
                            <li
                                key={index}
                                className="border-b pb-4 flex gap-4 cursor-pointer hover:bg-gray-50 rounded-md p-2"
                                onClick={() => setSelectedArticle(item)}
                            >
                                {thumbnail && (
                                    <img
                                        src={thumbnail}
                                        alt="thumbnail"
                                        className="w-24 h-24 object-cover rounded-md flex-shrink-0"
                                    />
                                )}
                                <div>
                                    <h3 className="text-blue-600 text-lg font-medium">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-1">
                                        {new Date(item.pubDate).toLocaleDateString()}
                                    </p>
                                    {item.contentSnippet && (
                                        <p className="text-gray-700 text-sm line-clamp-3">
                                            {item.contentSnippet}
                                        </p>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Nenhum artigo encontrado.</p>
            )}

            {totalPages > 1 && !loading && (
                <div className="flex justify-center space-x-2 mt-6">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`px-3 py-1 rounded-md ${
                                currentPage === i + 1
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-800'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}

            <AnimatePresence>
                {selectedArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                        onClick={() => setSelectedArticle(null)}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 max-w-2xl w-full rounded-lg shadow-lg overflow-auto max-h-[80vh]"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{selectedArticle.title}</h2>
                            <p className="text-sm text-gray-500 mb-4">
                                Publicado em {new Date(selectedArticle.pubDate).toLocaleDateString()}
                            </p>
                            <div
                                className="prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: selectedArticle['content:encoded'] }}
                            />
                            <div className="mt-4 text-right">
                                <a
                                    href={selectedArticle.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    Ver no Medium ↗
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}
