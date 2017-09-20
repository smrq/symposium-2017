import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Fragment from '../Fragment';
import * as styles from './slides.scss';

class Contents extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { loaded: false };
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.subIndex > this.props.subIndex) {
			if (nextProps.subIndex > 0 && this.props.subIndex <= 0) {
				this.timeout = setTimeout(this.load, 200);
			}
		} else if (nextProps.subIndex < this.props.subIndex) {
			if (nextProps.subIndex < 1 && this.props.subIndex >= 1) {
				this.setState({ loaded: false });
			}
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	render() {
		const { ix } = this.props;

		return (
			<Slide theme="dark">
				<h1>The case of the <strong>essential ;</strong></h1>
				{ix(1) && (
					<div className={styles.window}>
						<div className={styles.semi}>;</div>
						{this.state.loaded && (
							<Fragment>
								<div className={styles.header}>Header</div>
								<div className={styles.main}>
									<p>Lorem ipsum dolor sit amet, qui in aperiri assentior. Has diam esse noster te, propriae luptatum vix ad. Vivendum inimicus facilisis eu duo, illum constituam per cu. Vim ne utamur dissentiet, id mea sale probo tincidunt. Ut albucius abhorreant delicatissimi qui, enim facer temporibus eos et. Vim id debet timeam. Mel aliquam laoreet id.</p>
									<p>Esse erat singulis qui ad, usu te homero scaevola. In saepe graece mea, mea nihil labore ut. No vis pertinax ullamcorper, vel at debet libris. Enim viris cum no, usu no reque graeci philosophia. An est imperdiet signiferumque, pri in purto probatus patrioque, pri esse quodsi ex. Ut suas theophrastus est, ignota virtute in usu.</p>
									<p>Ut per mucius eleifend indoctum. No alia aeterno percipitur mea, vim ad ornatus oporteat. Accusata tractatos vix et, saperet nostrum intellegam eum ea. In aliquam salutandi maiestatis eos, luptatum expetenda ei sed, in vel modus aliquando intellegebat. Dico adipisci molestiae cu quo.</p>
								</div>
								<div className={styles.aside}>
									<p>Vis at efficiendi referrentur. Mei sonet nusquam ponderum an, illum aeque constituam in pri. Ei eos fugit nostrud, ne duo eruditi deserunt lobortis, ex per dicunt epicuri consequat. Ut idque alterum his. Menandri adolescens signiferumque sea te, cum incorrupte eloquentiam ne.</p>
									<p>Sed etiam suavitate id, vel ei alii posse postulant. Ex mazim iracundia dissentias qui, clita ocurreret neglegentur ad eam. Qui aliquid disputando signiferumque id, exerci blandit philosophia duo eu. Quo ut unum affert alterum, porro civibus intellegam per et. Melius vulputate an sea, eum nostro volumus no. Cum mazim assentior consectetuer ut.</p>
								</div>
							</Fragment>
						)}
					</div>
				)}
			</Slide>
		);
	}

	load = () => {
		this.setState({ loaded: true });
	};
}

export default asSlide(Contents, 2);
