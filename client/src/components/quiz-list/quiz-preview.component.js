import React from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import { Button, Icon } from 'semantic-ui-react';
import { closeQuizPreview } from './../../actions/quiz-list.actions';
import constants from './../../utils/constants';

class QuizPreview extends React.Component {
  constructor(props) {
    super(props);
    this.renderChart = this.renderChart.bind(this);
  }

  componentDidUpdate() {
    if (this.chart) this.renderChart();
  }

  renderChart() {
    const chart = new Chart(this.chart, {
      type: 'line',
      data: {
        labels: ['Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb', 'Nd'],
        datasets: [{
          label: 'Liczba wypełnionych quizów',
          data: [12, 19, 3, 5, 2, 3, 17],
          backgroundColor: 'rgba(56, 95, 113, 0.2)',
          borderColor: 'rgba(56, 95, 113, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });

    this.chart.parentNode.style.height = constants.quizPreviewHeight;

    return chart;
  }

  render() {
    if (!this.props.selectedQuiz) return null;

    return (
      <div style={{ height: this.props.selectedQuiz ? constants.quizPreviewHeight : 0 }} className="qd-quiz-preview">
        <button className="qd-quiz-preview__close-btn" onClick={this.props.closePreview}><Icon name="close" /></button>

        <div style={{ height: this.props.selectedQuiz ? constants.quizPreviewHeight : 0 }} className="qd-quiz-preview__chart">
          <canvas ref={el => { this.chart = el; }} />
        </div>

        <div className="qd-quiz-preview-details">
          <div>
            <span className="qd-quiz-preview-details__quiz-create-date">11 Wrzesień 2017</span>
            <h1 className="qd-quiz-preview-details__quiz-name">{this.props.selectedQuiz.name}</h1>
            <Button
              className="qd-quiz-preview-details__url-btn"
              content="Kopiuj adres"
              icon="globe"
              label={{ as: 'a', basic: true, pointing: 'right', content: 'https://quizdesigner.com/quiz/e425lnkdd8234' }}
              labelPosition="left"
            />
          </div>

          <div className="qd-quiz-preview-details__actions">
            <Button content="Edytuj quiz" size="small" />
            <Button content="Archiwizuj quiz" size="small" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedQuiz: state.previewSelectedQuiz,
});

const mapDispatchToProps = dispatch => ({
  closePreview: () => dispatch(closeQuizPreview()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPreview);
