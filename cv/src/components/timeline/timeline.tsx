import { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import HtmlIcon from '@mui/icons-material/Html';
import { projects } from '@/utils/projects';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.scss';

export const Timeline: FC = () => {
  return (
    <VerticalTimeline lineColor="#f1f5f9">
      {projects.map(({ name, id, src, desc, deploy, repo }) => {
        return (
          <VerticalTimelineElement
            key={id}
            className="vertical-timeline-element project"
            contentStyle={{ background: '#fff', color: '#334155' }}
            contentArrowStyle={{ borderRight: '7px solid #f1f5f9' }}
            date={name}
            iconStyle={{ background: '#F1F5F9', color: '#fff' }}
            icon={<HtmlIcon color="primary" fontSize="large" />}
          >
            <p className="project__setup">{desc}</p>
            <img className="project__img" src={src} alt={name} />
            <div className="project__links">
              <a className="project__link" href={deploy} target="_blank" rel="noopener noreferrer">
                deploy
              </a>
              {repo && (
                <a className="project__link" href={repo} target="_blank" rel="noopener noreferrer">
                  repo
                </a>
              )}
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};
