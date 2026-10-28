function Competences() {
  const liste = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <section className="bloc">
      <h2>Compétences</h2>
      <ul className="competences">
        {liste.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}

export default Competences;