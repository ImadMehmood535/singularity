import React from "react";

const MapArea = () => {
  return (
    <div className="MapArea overflow-hidden rounded-[25px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.3748098936503!2d6.916816176891902!3d51.341018122844105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c5ba3d798d09%3A0x278212b7c97def93!2sG%C3%B6rscheider%20Weg%2050%2C%2042579%20Heiligenhaus%2C%20Germany!5e0!3m2!1sen!2s!4v1719468927016!5m2!1sen!2s"
        width="100%"
        height="690px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapArea;
