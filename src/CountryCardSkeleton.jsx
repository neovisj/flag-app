import './CountryCard.css'; // Återanvänd stilfil

const CountryCardSkeleton = () => {
  return (
    <div className="country-card skeleton-card">
      <div className="skeleton-flag" />
      <div className="skeleton-line title" />
      <div className="skeleton-line" />
      <div className="skeleton-line" />
      <div className="skeleton-line" />
    </div>
  );
};

export default CountryCardSkeleton;