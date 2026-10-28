function Experiences() {
  const experiences = [
    {
      poste: "Stagiaire développeur web",
      lieu: "Entreprise X, Dakar",
      periode: " Août 2026-SEPTEMBRE 2026",
      description:
        "Création de pages web avec HTML, CSS et JavaScript. Correction de bugs et participation aux réunions d'équipe.",
    },
    {
      poste: "Projet personnel : site de vente en ligne",
      lieu: "Projet à distance",
      periode: "2026",
      description:
        "Conception d'un site de présentation de produits avec HTML, CSS et JavaScript.",
    },
    {
      poste: "Projet scolaire : application de gestion",
      lieu: "ISI Dakar",
      periode: "2026",
      description:
        "Travail en groupe pour créer une petite application avec liste de tâches.",
    },
  ];

  return (
    <section className="bloc">
      <h2>Expériences</h2>
      {experiences.map((e) => (
        <div key={e.poste} className="experience">
          <h3>{e.poste}</h3>
          <p className="infos">
            {e.lieu} · {e.periode}
          </p>
          <p>{e.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiences;