const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //mini: true,
    //fixed: true,
    autoplay: false,
    //loop: 'all',
    audio: [{
        name: '慢慢喜欢你',
        artist: '莫文蔚',
        url: 'http://music.163.com/song/media/outer/url?id=541687281.mp3',
        cover: 'http://p2.music.126.net/21l0Cy8SO6ycY_eZT-6vVw==/109951163386949943.jpg'
    }]
});