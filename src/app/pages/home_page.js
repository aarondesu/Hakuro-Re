import React from "react";
import { connect } from "react-redux";
import { doGetList, resetList } from "../actions/manga_actions";
import { Header, Container, Grid, Segment } from "semantic-ui-react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: 1 // Current page, will incremenet when scrolled to the bottom
    };

    // Implemenet infinite scroll
    window.onscroll = e => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // Increment currentPage and get data
        this.setState({ currPage: this.state.currPage + 1 });
        console.log(
          "Getting list from api: Current Page is " + this.state.currPage
        );
      }
    };
  }

  componentDidMount() {
    this.props.resetList();
    this.props.doGetList(this.state.currPage);
  }

  render() {
    const { mangaList } = this.props;

    return (
      <Container>
        <Header>Manga list</Header>
        <Grid columns={3} container double stackable>
          {mangaList.length &&
            mangaList.map(mangaItem => (
              <Grid.Column key={mangaItem.i}>
                <Segment>{mangaItem.t}</Segment>
              </Grid.Column>
            ))}
        </Grid>
      </Container>
    );
  }
}

const mapStateProps = state => ({
  mangaList: state.mangaList
});

const mapActionProps = dispatch => ({
  doGetList: page => dispatch(doGetList(page)),
  resetList: () => dispatch(resetList())
});

export default connect(
  mapStateProps,
  mapActionProps
)(HomePage);
