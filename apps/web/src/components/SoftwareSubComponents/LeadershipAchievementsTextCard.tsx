export default function ProfileCard(): React.JSX.Element {
  return (
    <section>
      <div className="leadership-flex-box">
        <h2>Achievements</h2>
        <div className="split-cards__flex-start margin-none">
          <div className="floating-card-leadership__half-left fifty-width">
            <h3 className="">Building a Team</h3>
            <p className="margin-top-20">
              Between the beginning of 2024 and now I took a three person team to a soon to be nine
              person department.
            </p>
            <p className="margin-top-20">
              By implementing a hiring process to simplify the acceptance criteria and interview
              stages we could equate all applicants across mulitple roles and create a
              multi-disciplinary team of individuals.
            </p>
            <p className="margin-top-20">
              I lead an initiative to mix the skillset in the team between pure developers and those
              with communication skills. This way resources were split across account managers and
              tooling experts.
            </p>
            <p className="margin-top-20">
              This means we have direct-to-customer developers with high-level communication and
              organisational skills managing the projects whilst supported on efficiency,
              standardisation, testing and tooling by developers with a skillset in deep technical
              topics.
            </p>
          </div>
          <div className="floating-card-leadership__half-right fifty-width">
            <h3 className="">Delivering Work</h3>
            <p className="margin-top-20">
              By optimising the team we were able to take on managing the product we offered.
            </p>
            <p className="margin-top-20">
              In creating processes for the team to work with our internal Product and Devops team
              were were able to achieve both better communication in advance of deploying our
              product releases and easier deployments.
            </p>
            <p className="margin-top-20">
              By improving communication regarding product releases, team members were better able
              to plan cusotmisation and requirements engineering, and by working with the devops
              team we created a simpler CI/CD pipeline to enable more frequent and reliable
              releases.
            </p>
            <p className="margin-top-20">
              By enabling teams to work together, each individual team member gained more autonomy
              over their work. This increased quality by empowering team members to own their
              projects and set deployment and feature schedules that fit the individual customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
