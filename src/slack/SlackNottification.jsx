import axios from 'axios'

const SlackButton = () => {
  const sendMessageToSlack = () => {
    const message = {
      channel: '#dayoff',
      text: 'Hello, Slack!',
    }
    axios
      .post(process.env.SLACK_HOOK_URL, message, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        },
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return <button onClick={sendMessageToSlack}>Slack</button>
}

export default SlackButton
