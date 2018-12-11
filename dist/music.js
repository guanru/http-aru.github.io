const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //mini: true,
    //fixed: true,
    autoplay: false,
    //loop: 'all',
    audio: [{
        name: '慢慢喜欢你',
        artist: '莫文蔚',
        url: 'https://m10.music.126.net/20181211113930/9c811c65cf82784b96e28f3025a9c347/ymusic/036c/9f6b/412f/f574a4e6f9d53e030d9394f77dc73b09.mp3',
        cover: 'https://p2.music.126.net/21l0Cy8SO6ycY_eZT-6vVw==/109951163386949943.jpg'
    }]
});