const pageSize = parseInt(import.meta.env.PUBLIC_PAGINATION_ITEMS || '10', 10);

export const blog = {
    title: {
        long: 'Reasoning Processes',
        short: 'Reasoning',
    },
    path: '/reasoning-processes',
    pageSize,
};
