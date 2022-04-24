import { Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchGamesByAdvancedFilterSearchBar,
  fetchGamesBySearchBar,
} from "../../store/games/actions";
import { allGames } from "../../store/games/selectors";
import "./styles.css";

const SearchBar = ({ placeholder, type, gameselector, ...props }) => {
  const games = useSelector(allGames);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterHandler = (eventValue) => {
    const newFilter = games.filter((game) => {
      return game.title.toLowerCase().includes(eventValue.toLowerCase());
    });

    if (eventValue === "") {
      dispatch(fetchGamesBySearchBar([]));
      dispatch(fetchGamesByAdvancedFilterSearchBar([]));
      return;
    }

    const POINT_CHAR_MATCH = -5;
    const POINT_NO_MATCH = 50;
    const POINT_TYPO = 1;

    const calculateWordScore = (matchedWordCount, wordScore) => {
      return wordScore * (1 - matchedWordCount / 10);
    };

    const getMatchScore = (a, b) => {
      let charIndex = 0;
      let score = 0;
      while (charIndex < a.length - 1) {
        const charA = a[charIndex];
        const charB = b[charIndex];
        if (charA !== charB) {
          const startIndex = charIndex >= 0 ? charIndex : 0;
          const endIndex = charIndex < a.length - 2 ? charIndex : a.length - 1;
          const substrA = a.slice(startIndex, endIndex);
          const substrB = b.slice(startIndex, endIndex);
          const re = new RegExp(substrA.replace(charA, ".?"), "gi");
          const match = substrB.match(re);
          if (match) {
            score += POINT_TYPO;
            charIndex = endIndex < a.length - 1 ? endIndex + 1 : a.length - 1;
          } else {
            score += POINT_NO_MATCH;
            charIndex += 1;
          }
        } else {
          score += POINT_CHAR_MATCH;
          charIndex += 1;
        }
      }

      return score;
    };

    const getMatch = (a, b) => {
      // User searched properly and found an exact match
      if (b.toLowerCase().includes(a.toLowerCase())) {
        return {
          exactMatch: true,
          score: null,
          wordScore: null,
        };
      }

      const splitWords = a.split(" ");
      let wordScore = 0;
      let matchedWordCount = 0;
      let score = 0;
      splitWords.forEach((word) => {
        const re = new RegExp(word, "gi");
        const match = re.exec(b);
        if (match) {
          wordScore += word.length;
          matchedWordCount += 1;
          score += match.index;
        }
      });

      // All user provided search words matched (in any order)
      if (wordScore === splitWords.length) {
        return {
          exactMatch: false,
          score: score / wordScore,
          wordScore: calculateWordScore(matchedWordCount, wordScore),
        };
      }

      // User (probably) made some typos
      score = getMatchScore(a, b);
      return {
        exactMatch: false,
        score,
        wordScore: calculateWordScore(matchedWordCount, wordScore),
      };
    };

    const sortResult = (a, b) => {
      if (a.match.exactMatch !== b.match.exactMatch) {
        return Number(b.match.exactMatch) - Number(a.match.exactMatch);
      }
      if (a.match.wordScore !== b.match.wordScore) {
        return b.match.wordScore - a.match.wordScore;
      }
      return a.match.score - b.match.score;
    };

    const results = games.map((entry) => ({
      title: entry.title,
      match: getMatch(eventValue, entry.title),
    }));

    results.sort(sortResult);

    if (results.length !== 0) {
      const size = 7;
      console.log(results.slice(0, size));

      dispatch(fetchGamesByAdvancedFilterSearchBar(results.slice(0, size)));
    }

    dispatch(fetchGamesBySearchBar(newFilter));
  };

  const navigateTo = (event) => {
    event.preventDefault();
    navigate("/searchPage");
  };

  const defaultValues = {
    border: "1px solid rgba(185, 180, 180, 0.158)",
    borderRadius: "50px",
    backgroundColor: "black",
    color: "white",
    marginLeft: "20px",
    width: "200px",
  };

  return (
    <div>
      <Form className="search-bar-container" onSubmit={navigateTo}>
        <FormControl
          type={type}
          placeholder={placeholder}
          aria-label="Search"
          onChange={(event) => filterHandler(event.target.value)}
          style={{
            ...defaultValues,
            ...props.style,
          }}
        />
      </Form>
    </div>
  );
};

export default SearchBar;
