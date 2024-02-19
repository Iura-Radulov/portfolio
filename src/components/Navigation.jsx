import { Link, animateScroll as scroll } from 'react-scroll';
import upArrow from '../icons/up-arrow.png';

const styles = {
  header: {
    display: 'flex',
    position: 'sticky',
    top: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderBottom: '1px solid #2A363B',
    padding: 20,
    backgroundColor: 'black',
    color: '#DBE8D4',
  },
};

// const activeLink = {
//   color: '#4e52cd',
// };

export default function Navigation() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header style={styles.header}>
      <button className="mr-4" onClick={scrollToTop}>
        <img src={upArrow} className="w-6" alt="up arrow icon" />
      </button>
      <nav>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="mr-4"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="mr-4"
        >
          Experience
        </Link>
        <Link
          to="work"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="mr-4"
        >
          Work
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="mr-4"
        >
          Contact
        </Link>
        <a
          href="https://iura-radulov.github.io/resume/"
          target="blank"
          className="mr-4"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
