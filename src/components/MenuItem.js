import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeContext from "../../src/ThemeContext";
import { Fade } from "react-awesome-reveal";

const MenuItem = ({ thumbnail, name, price }) => {
  const appTheme = useContext(ThemeContext);

  return (
    <Fade className="reveal-div">
      <Link href="/details">
        <div className="menu-item">
          <div className="thumbnail">
            <Image
              src={thumbnail}
              alt="item thumbnail"
              width="70px"
              height="70px"
            />
          </div>
          <h4>{name}</h4>
          <p className="price" style={{ color: appTheme.primary }}>
            AED<span style={{ color: appTheme.secondary }}>{price}</span>
          </p>
        </div>
      </Link>
    </Fade>
  );
};

export default MenuItem;
