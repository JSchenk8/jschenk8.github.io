import React from 'react'
import profilePhoto from '../images/joseph-2024.jpg'

export default function ProfileCard() {
  return (
    <section>
      <div className="leadership-flex-box">
        <h2 className="top-margin-30">Achievements</h2>
        <h3 className="top-margin-30">Building a Team</h3>
        <p className="top-margin-20">
          Between the beginning of 2024 and now I took a three person team to a soon to be nine
          person department.
        </p>
        <p className="top-margin-20">
          By implementing a hiring process to simplify the acceptance criteria and interview stages
          we could equate all applicants across mulitple roles and create a multi-discipline team of
          individuals.
        </p>
        <p className="top-margin-20">
          I lead an initiative to mix the skillset in the team between pure developers and those
          with communication skills. This way resources were split across account managers and
          tooling experts.
        </p>
        <p className="top-margin-20">
          This means we had direct-to-customer developers managing the projects whilst supported on
          efficiency, standardisation, testing and tooling by developers less skilled and willing to
          manage accounts.
        </p>
        <h3 className="top-margin-30">Delivering Work</h3>
        <p className="top-margin-20">
          By optimising the team we were able to take on managing the product we offered.
        </p>
        <p className="top-margin-20">
          In years gone by we had relied on agencies and in-customer development teams to host,
          build, and run our CMS. By taking it internal we regained quality control, improved
          efficiency and increased customer success.
        </p>
        <p className="top-margin-20">
          Creating processes for the team to work with our internal Product and Devops team were
          were able to achieve two things:
          <ul>
            <li>
              Firstly, we are in constant communication about incoming features in each bi-monthly
              release. This allows team members to approach their respective customers and pre-plan
              the implementation, customisation and deployment of new features.{' '}
            </li>
            <li>
              Secondly, the team are able to own their own deployments. By creating a setup using
              Flux and Terraform that simplifies down to release versions managed through semantic
              release, everyone in the team has a simple and efficient way to manage features
              released across development, staging and production environments.
            </li>
          </ul>
        </p>
        <p className="top-margin-20">
          By enabling teams to work together, each individual team member gained more autonomy over
          their work. This increased quality by empowering team members to own their projects and
          set deployment and feature schedules that fit the individual customers.
        </p>
        <p className="top-margin-20">
          In turn, this gave each customer not only a fully bespoke setup managed one-to-one by a
          developer, but also their own customisable deployment schedule, feature roll out and end
          user trust and reliability.
        </p>
      </div>
    </section>
  )
}
