import React, { useEffect, useState } from 'react';
import '../styles/chapter.scss';
import { Link } from 'react-router-dom';

const Chapter = () => {

    const [bookName, setBookName] = useState('I’m Too Strong To Be Immortal');
    const [chapterName, setChapterName] = useState('Chapter 20: Encounter ghost');
    const [chapterContent, setChapterContent] = useState(`<p>　　 The official road twists and turns under the dark night.</p>
    <p>　　 Can't tell the difference between the southeast and the northwest of Bai Donglin. For a while, I don't know where to go.</p>
    <p>　　 It's sloppy, it should be left alive, and it's easy to kill.</p>
    <p>　　 "Hesitate, quantum mechanics. Face left, reverse face right."</p>
    <p>　　 Bai Donglin chanted the mysterious technique, took off his waistband and threw it in the air.</p>
    <p>　　 took a look at the waist card, and disappeared to the right when he moved.</p>
    <p>　　 Less than a cup of tea time, Bai Donglin faintly saw a light on the hillside ahead.</p>
    <p>　　 "Strange, how can there be people in this wilderness."</p>
    <p>　　I thought for a while, but decided to go and see what happened. It’s good to be able to ask for directions.</p>
    <p>　　 After a few jumps, I arrived in front of a big house with two red lanterns hanging at the door. Seeing that this house has an extraordinary momentum, it should be a big family.</p>
    <p>　　 Wutong Mountain Villa.</p>
    <p>　　 looked up at the plaque, and heard the faint noise from the mansion, Bai Donglin knocked on the copper ring on the door.</p>
    <p>　　 But in a moment, a servant opened the door and looked at Bai Donglin at the door curiously and asked:</p>
    <p>　　 "I don't know where the son is from? Did he come to attend the birthday banquet of my master?"</p>
    <p>　　 Birthday feast? Who will hold a birthday banquet for the big evening?</p>
    <p>　　Bai Donglin felt more and more weird, but he didn’t think too much about it. He confessed:</p>
    <p>　　 "A person in Xiabaicheng, a merchant passed by and encountered a gangster. He escaped by chance but got lost. I just want to ask for directions to disturb your house."</p>
    <p>　　 The servant showed a daze, looking at Bai Donglin and inviting:</p>
    <p>　　 "My son, the villain grew up in the village, and he is not very familiar with the surrounding area. Why don't you go to see my master with the villain, he will surely help you out."</p>
    <p>　　 "It's so good."</p>
    <p>　　 Bai Donglin narrowed his eyes slightly, but he was a little curious about what tricks they were going to do, so he simply followed in and took a look.</p>
    <p>　　 "My son, please come with me."</p>
    <p>　　 followed the servant into the gate and looked around. The mansion was built quite luxuriously.</p>
    <p>　　 is on both sides of the corridors, and in the middle is the hall. There is a large plaque made of red sandalwood and marble.</p>
    <p>　　 turned to the interstitial, three small reception halls, behind the hall is the main courtyard, all with carved beams and painted buildings.</p>
    <p>　　 At this time, the compound was full of banquets, the guests were full, the crowds laughed and laughed, everyone was smiling.</p>
    <p>　　 Bai Donglin felt that this smile was a little weird and permeating, and it felt hard, like wearing a smiling mask.</p>
    <p>　　 The servant quickly stepped forward and whispered to a rich old man on the main seat.</p>
    <p>　　 The old man got up and came to Bai Donglin, and said enthusiastically:</p>
    <p>"The son is a guest from afar. It just so happens that the old man is celebrating his birthday today. It is better to stay and drink a few cups of turbid wine. Now it is late, and the son will stay at the house overnight. Tomorrow morning, the old man will prepare the horses for the son and send him on the road. Okay?"</p>
    <p>　　 The old man said as he pulled him to the wine table and sat down. Bai Donglin sat down halfway, thinking that this is getting more and more interesting, but he said politely:</p>
    <p>　　 "I'm disrespectful if I'm in this way, and I've disturbed my husband, but I don't have a long body, and I can't give a birthday gift. I'm really ashamed!"</p>
    <p>　　 "You don’t have to be polite, son, come here, fill the son with wine!"</p>
    <p>　　 immediately attracted a bright-eyed, white-toothed, glamorous green-clothed maid, sat down next to Bai Donglin, and served him wine and vegetables.</p>
    <p>　　 "My son, please drink."</p>
    <p>　　The green-clothed maid exhales like blue, smiling and handing a glass of wine.</p>
    <p>　　Bai Donglin is not welcome. He took the glass and drank it in one sip. He liked the poisonous wine the most, but he was afraid that it was not poisonous enough.</p>
    <p>　　 Sure enough, as soon as the wine entered the abdomen, it turned into a wave of yin, cold and vicious energy, destroying the qi and blood meridians in the body, and then triggered the "harm reversal", except for providing a wave of enhanced energy.</p>
    <p>　　 "Good wine!"</p>
    <p>　　 Bai Donglin opened his mouth and exhaled a chill, and said loudly.</p>
    <p>　　 The old man laughed and said:</p>
    <p>　　 "Since it's a good wine, the son should drink more. We won't be drunk tonight!"</p>
    <p>　　 The guests in the yard also laughed, and the laughter was weird.</p>
    <p>　　 After eating this meal for an hour, Bai Donglin drank three pots of wine!</p>
    <p>　　 drank it so that the green-clothed maid looked a little unnatural, and her smile gradually disappeared.</p>
    <p>　　 Bai Donglin saw the wine and drank it, but it didn’t help to fish, and then pretended to be drunk and dimly said:</p>
    <p>　　 "Lao Zhang, I can't beat alcohol, I want to go to rest first."</p>
    <p>　　 "That's good, Qingqing, don't hesitate to serve the son down to rest."</p>
    <p>　　 The green-clothed maid assisted Bai Donglin, who was stumbling, and walked towards the back room.</p>
    <p>　　 was helped into a bedroom by a green-robed maid named Qingqing, and fell on a bed obediently, making the image of the drunkard come to life.</p>
    <p>　　 After a while, Bai Donglin breathed smoothly, as if he had entered a deep sleep.</p>
    <p>　　 Qingqing stood by the bed and looked at Bai Donglin viciously, gritted his teeth with hatred.</p>
    <p>　　 This **** drunkard drank all the yin wine she had worked so hard to save!</p>
    <p>　　 Ordinary people will get drunk after drinking a cup, and the qi, blood and yang will be sluggish.</p>
    <p>　　 But this person is full of Yang Qi, full of blood, and it is no wonder that he was drunk after drinking so much Yin wine.</p>
    <p>　　 Hmph, it's so cheap, you **** ghost, just use your yang energy to compensate me!</p>
    <p>　　 Qingqing gave Bai Donglin a bitter look again, then climbed onto the bed and rode on his waist.</p>
    <p>　　 Possessed and kissed Bai Donglin's mouth, a pale inner alchemy inside his body slid around.</p>
    <p>　　 A peculiar suction force sucked Bai Donglin's Yang Qi out of his body, and the Yang Qi appeared faintly golden.</p>
    <p>　　 As soon as the Yang Qi entered the body, a pinkish color appeared on Qingqing's face, as if he was drunk. Feel the purity of this Yang Qi, and the blue eyes are intoxicating.</p>
    <p>　　 No loss in this wave! Such yang energy will surely earn back the yin wine that I have lost, and also make a lot of money!</p>
    <p>　　 immediately started smoking harder.</p>
    <p>　　Bai Donglin only felt his mouth cool~www.mtlnovel.com~ I was shocked, clenched his fists, my innocence!</p>
    <p>　　 I felt something in my body being sucked out. I felt weak for a while, and then returned to normal. At the same time, a wave of strengthening energy appeared in my body.</p>
    <p>　　 Loosen the clenched fist, nothing more, everything is to become stronger, and it should be a bit of a loss.</p>
    <p>　　 immediately runs the exercises, using the strengthening energy to strengthen the whole body up and down.</p>
    <p>　　 A cup of tea time passed, Qingqing was shocked, what kind of monster this is! She sucked so much Yang Qi, and she still kept flowing.</p>
    <p>　　 This amount almost caught up with a thousand young brawny!</p>
    <p>　　 The inner pill in the body is already a bit overwhelmed, no, if you **** it down, you will be crushed to death.</p>
    <p>　　 Qingqing let go of his mouth, trying to stop the inner alchemy from running.</p>
    <p>　　 At this moment, Bai Donglin suddenly opened his eyes and yelled:</p>
    <p>　　 "Hey! Daring evildoer! I can tell at a glance that you are not human!"</p>
    <p>　　 "Monster! I want you to help me practice!"</p>
    <p>　　 After speaking, he held Qingqing's head tightly with his hands, and kissed his mouth again.</p>
    <p>　　Bai Donglin's violent qi and blood was sucked away by Qingqing with a stronger Yang Qi. Qingqing's inner alchemy was stimulated by this, and it moved faster and completely lost control.</p>
    <p>　　 One yin and one yang, the yang Qi flows from high density to low density, and it can't stop at all.</p>
    <p>　　Bai Donglin's strengthening energy continued to appear in his body, and he was so beautiful that he almost laughed out loud.</p>
    <p>　　 Qingqing opened his eyes wide, with a look of horror!</p>
    <p>　　 can't do it! To be crushed to death!</p>
    <p>　　 After a while, the golden light began to appear in Qingqing's eyes, the color of panic had already turned into despair, and the golden light slowly flowed all over his body.</p>
    <p>　　 With a "bang", the beautiful and moving female ghost Qingqing exploded.</p>
    <p>　　 turns into golden light that fills the room, as gorgeous as fireworks.</p>`);
    const [settingsOn, setSettingsOn] = useState(false);
    const [blackMode, setBlackMode] = useState(false);
    const [chapterFontSize, setChapterFontSize] = useState(1);
    const [showChapterFontSize, setShowChapterFontSize] = useState(1);
    const [isFontMinDisabled, setIsFontMinDisabled] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const changeSettings = () => {
        setSettingsOn(!settingsOn);
    };

    const changeBlackMode = () => {
        setBlackMode(!blackMode);
    };

    const changeChapterFontSize = (x) => {
        if (chapterFontSize >= 1 && chapterFontSize <= 1.3) {
            var p = chapterFontSize;
            if (x === true) {
                if (p < 1.3) {
                    p = p + 0.1;
                    setChapterFontSize(parseFloat(p.toFixed(p)));
                }
            }
            else {
                if (p > 1) {
                    p = p - 0.1;
                    setChapterFontSize(parseFloat(p.toFixed(1)));
                }
            }
        }
    };

    useEffect(() => {
        scrollToTop();
        document.title = `${bookName} ${chapterName} - Shadow Novels`;
        setShowChapterFontSize(chapterFontSize);
        // eslint-disable-next-line
    }, []);

    return (
        <div className='chapter' style={blackMode ? ({ backgroundColor: '#212529' }) : ({})}>
            <div className="chapterAticle" style={blackMode ? ({ backgroundColor: '#212529', color: '#ffffff' }) : ({})}>
                <div className="relatedLinks">
                    <Link className='clikerbleLink' to={'/'}>Home</Link>
                    <span><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13 17 5-5-5-5"></path>
                        <path d="m6 17 5-5-5-5"></path>
                    </svg></span>
                    <Link className='clikerbleLink' to={'/book'}>{bookName}</Link>
                    <span><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13 17 5-5-5-5"></path>
                        <path d="m6 17 5-5-5-5"></path>
                    </svg></span>
                    <span style={blackMode ? ({ backgroundColor: '#212529', color: '#ffffff' }) : ({})}>{chapterName}</span>
                </div>
                <div className="chapterName" style={blackMode ? ({ backgroundColor: '#212529', color: '#ffffff' }) : ({})}>{bookName} {chapterName}</div>
                <div className="chapterNavbar">
                    <Link className='chapterNavbarItem' to={'/chapter'}>Prev</Link>
                    <Link className='chapterNavbarItem' to={'/book'}>Table of Content</Link>
                    <Link className='chapterNavbarItem' to={'/chapter'}>Next</Link>
                </div>
                <div className="chapterSettings">
                    {
                        settingsOn ? (
                            <div className={blackMode?('optionBlackBorder chapterSettingsOptionPanel'):('chapterSettingsOptionPanel')}>
                                <div className="row">
                                    <div className="column">Dark Mode :</div>
                                    <div className="column">
                                        <div className="darkModePanel">
                                            <label>
                                                <input type="checkbox" defaultChecked={blackMode} onClick={changeBlackMode} />
                                                <span />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">Change Font Size</div>
                                <div className="row">
                                    <div className="changeFontSizePanel">
                                        <button disabled={chapterFontSize === 1 ? (true) : (false)} onClick={() => changeChapterFontSize(false)}>
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12h14" />
                                            </svg>
                                        </button>
                                        <label>{(chapterFontSize * 10) - 9}</label>
                                        <button disabled={chapterFontSize === 1.3 ? (true) : (false)} onClick={() => changeChapterFontSize(true)}>
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5v14" />
                                                <path d="M5 12h14" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={blackMode ? ('cancelBlackMode cancelButtonPanel') : ('cancelButtonPanel')}>
                                        <button onClick={changeSettings}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='chapterSettingsOnButtenPanel'>
                                <button onClick={changeSettings} className={blackMode ? ('chapterSettingsOnButtenPanelBlack') : ('chapterSettingsOnButtenPanelNormal')}><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.723 1.723 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065Z" />
                                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg><span>Settings</span></button>
                            </div>
                        )
                    }
                </div>
                <div className={blackMode ? ('chapterContent chapterContentBlackMode') : ('chapterContent')} style={{ fontSize: chapterFontSize + 'rem' }}>
                    <div dangerouslySetInnerHTML={{ __html: chapterContent }} />
                </div>
                <div className="chapterNavbar">
                    <Link className='chapterNavbarItem' to={'/chapter'}>Prev</Link>
                    <Link className='chapterNavbarItem' to={'/book'}>Table of Content</Link>
                    <Link className='chapterNavbarItem' to={'/chapter'}>Next</Link>
                </div>
            </div>
        </div>
    );
};

export default Chapter;