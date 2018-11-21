import React from "react"

export default class TweetButton extends React.Component {

  constructor(){
      super();
      this.tweetButton = React.createRef();
  }

  componentDidMount() {
    if (window.twttr) {
        window.twttr.widgets.load(this.tweetButton.current);
    }
  }

  render() {
    return (
        <div style={{margin: '20px'}}>
            <a
            ref={this.tweetButton}
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-size="large"
            data-text=""
            data-url="https://www.tiny-friends-godo.net/"
            data-hashtags="ちっちゃいこのいる日常合同"
            data-show-count="false">Tweet</a>
        </div>
    );
  }
}