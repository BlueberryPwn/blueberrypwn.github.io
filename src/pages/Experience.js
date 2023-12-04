import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Internships at Postnord, Västerås
          </h3>
          <p>
            Interned at Postnord twice. During my first internship I got to sort
            letters as well as newspapers alongside a supervisor. At my second
            internship I got to sort as well as deliver letters together with a
            mailman.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Ö&B, Västerås</h3>
          <p>
            I worked at Ö&B for three weeks during the summer break. I handled
            several tasks such as refilling the shelves and the store warehouse,
            both alone and alongside colleagues. I also helped out with removing
            the warehouse waste and answered customers' questions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Wijkmanska, upper secondary school, Västerås
          </h3>
          <p>
            I studied the technology programme at Wijkmanska specialising in
            industrial engineering. Here I got the chance to write some desktop
            applications in Java, program a circuit board and also an industrial
            robot later on.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Chas Academy, higher vocational education, Stockholm
          </h3>
          <p>
            I'm currently studying full stack development specialising in .NET
            at Chas Academy in Stockholm. During my time here I've learned to
            write in several languages such as C#, JavaScript and SQL.
            Furthermore, I have gained experience in Git, APIs, React, agile
            methodologies such as Scrum, TDD and more.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
