import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';


const CountingCard = ({ limit }) => {
    const [count, setCount] = useState(0);
    limit = limit / 1000;

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                const nextCount = prevCount + 1;
                if (nextCount > limit) {
                    clearInterval(interval); // Stop counting when it reaches the limit
                    return limit;
                }
                return nextCount;
            });
        }, 10); // Adjust the interval (in milliseconds) for different speeds

        return () => clearInterval(interval);
    }, [limit]);

    return (
        <Typography
            style={{ color: "#878787", fontSize: 40, fontWeight: "bold" }}
          >
            {count}K+
          </Typography>
    );
};

export default CountingCard;
