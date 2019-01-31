import Project from 'models/Project';
import * as React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../store/project';
import { IApplicationState, IConnectedReduxProps } from '../../store/store';
import ProjectWidget from '../ProjectWidget/ProjectWidget';
import styles from './Projects.module.css';

interface IPropsFromState {
  projects?: Project[] | null;
  loading: boolean;
}

type AllProps = IPropsFromState & IConnectedReduxProps;

class Projects extends React.Component<AllProps> {
  public componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  public render() {
    return (
      <div className={styles.projects}>
        <div className={styles.widgets_list}>
          {console.log(this.props.projects)}
          {this.props.projects ? this.props.projects.map((proj: any, i: number) => <ProjectWidget project={proj} key={i} />) : ''}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ projects }: IApplicationState) => ({
  loading: projects.loading,
  projects: projects.data
});

export default connect(mapStateToProps)(Projects);
