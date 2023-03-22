import "./styles.css";
import Entry from "./components/entry";
import Emojipedia from "./emojipedia";

function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>
    </div>
  );
}
