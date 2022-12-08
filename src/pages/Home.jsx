
const Header = () =>{
    return(
        <>
        <header className="header">
            <h1 className="header_title">HOME</h1>
            <ul className="header_mune">
                <li>お前はぼっち</li>
                <li>サークル</li>
                <li>ログイン</li>
                <li>新規登録</li>
            </ul>
        </header>
        </>
    )
}
const Tweets =() =>{
    return(
        <>
        <div className="Tweet">
            <h1 className="tweet_title">Tweets</h1>
            <div className="tweet_border">
                <div className="user_wirte">
                    <textarea type="text" className='tweet_input'/>
                    <div>
                        <button>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
const Dmmessage = () =>{
    return(
        <>
        <div className='DM'>
            <h1 className="DM_title">DM</h1>
            <div className="DM_border">
                <div className="DM_user">
                    @
                </div>
                <div className="DM_leftborder"></div>
                <div className="DM_messages">
                    <div className="DM_message"></div>
                    <textarea className="DM_send"/>
                    <button className="DM_send_buttom">✒︎</button>
                </div>
            </div>
        </div>
        </>
    )
}

const Home = () =>{
    return(
        <>
        <Header />
        <div className="flex_main">
            <Tweets />
            <Dmmessage />
        </div>
        </>
    )
}
export default Home;