import { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { projects } from '@/utils/projects';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.scss';

export const Timeline: FC = () => {
  return (
    <VerticalTimeline lineColor="#f1f5f9">
      {projects.map(({ name, id, src, desc, deploy, repo, backend, icon, iconColor }) => {
        return (
          <VerticalTimelineElement
            key={id}
            className="vertical-timeline-element project"
            contentStyle={{ background: '#fff', color: '#334155' }}
            contentArrowStyle={{ borderRight: '7px solid #f1f5f9' }}
            date={name}
            iconStyle={{ background: iconColor, color: '#fff' }}
            icon={icon}
          >
            <p className="project__setup">{desc}</p>
            <img className="project__img" src={src} alt={name} />
            <div className="project__links">
              <a className="project__link" href={deploy} target="_blank" rel="noopener noreferrer">
                Deploy
              </a>
              {repo && (
                <a className="project__link" href={repo} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              )}
              {backend && (
                <a
                  className="project__link"
                  href={backend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Api
                </a>
              )}
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};
