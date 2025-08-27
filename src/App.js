const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
    "Erase again, and then",
    "A poppy blooms.",
    "Erase again, and then",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <p key={index}>
          {line}
          <br />
          <br />
          {/* show up the line-breaks till last-line  */}
          {index !== poem.lines.length - 1 && <hr />}
        </p>
      ))}
    </article>
  );
}
