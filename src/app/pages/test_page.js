import React from "react";
import { connect } from "react-redux";
import { Button, Container, Header, Label } from "semantic-ui-react";

import { doGetList, doGetMangaInfo } from "../actions/manga_actions";

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.loadMangaList = this.loadMangaList.bind(this);
    this.loadMangaInfo = this.loadMangaInfo.bind(this);

    this.state = {
      isLoadingList: false,
      isLoadingMangaInfo: false
    };
  }

  loadMangaList(e) {
    e.preventDefault();
    this.setState({ isLoadingList: true });
    this.props.doGetList(1);
  }

  loadMangaInfo(e) {
    e.preventDefault();
    this.setState({ isLoadingMangaInfo: true });
    this.props.doGetMangaInfo("5bccfb44719a1693b4b6dfcd");
  }

  componentWillReceiveProps(nextProps) {
    const { mangaList, mangaInfo } = nextProps;
    if (mangaList && mangaList.length > 0) {
      this.setState({ isLoadingList: false });
    }

    if (mangaInfo) {
      this.setState({ isLoadingMangaInfo: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Header>Page testing</Header>
          <div id="manga-list-monitor">
            <label style={{ display: "block" }}>Load Manga List</label>
            <Button
              loading={this.state.isLoadingList}
              disabled={this.state.isLoadingList}
              onClick={this.loadMangaList}
            >
              Load
            </Button>
          </div>

          <div id="manga-info-monitor">
            <label style={{ display: "block" }}>Load Manga Info</label>
            <Button
              loading={this.state.isLoadingMangaInfo}
              disabled={this.state.isLoadingMangaInfo}
              onClick={this.loadMangaInfo}
            >
              Load
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateProps = state => ({
  mangaList: state.mangaList,
  mangaInfo: state.mangaInfo
});

const mapActionProps = dispatch => ({
  doGetList: page => dispatch(doGetList(page)),
  doGetMangaInfo: mangaId => dispatch(doGetMangaInfo(mangaId))
});

export default connect(
  mapStateProps,
  mapActionProps
)(TestPage);
