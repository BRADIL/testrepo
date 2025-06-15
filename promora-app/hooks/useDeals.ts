export const useDeals = () => {
  const getDeals = () => {
    return [
      { id: 1, status: 'Active', budget: '$1000', reach: '10k' },
    ];
  };
  return { getDeals };
};
