const pageSize = parseInt(import.meta.env.PUBLIC_PAGINATION_ITEMS || '10', 10);

export const owner = {
    displayName: 'Faizal Chan.',
    displayPicture: '/res/favicon.png',
    introduction: 'I shape solutions by balancing usability, structure, and intent beyond surface-level visuals.',
    shortTitle: 'UX Engineer & Researcher',
};

export const blog = {
    title: {
        long: 'Reasoning Processes',
        short: 'Reasoning',
    },
    path: '/reasoning-processes',
    pageSize,
};
