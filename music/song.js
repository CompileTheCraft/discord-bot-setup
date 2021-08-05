import Discord from 'discord.js';
import ytdl from 'ytdl-core';

import { YTSearcher } from 'ytsearcher';

const searcher = new YTSearcher({
    key: process.env.YTAPI,
    revealKey: true
});

const queue = new Map();

function song(msg, args) {
    const serverQueue = queue.get(msg.guild.id);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'play':
            execute(msg, serverQueue);
            break;
        case 'stop':
            stop(msg, serverQueue);
            break;
        case 'skip':
            skip(msg, serverQueue);
            break;
        case 'pause':
            pause(msg, serverQueue);
            break;
        case 'resume':
            resume(msg, serverQueue);
            break;
    }

    async function execute(msg, serverQueue) {
        let vc = msg.member.voice.channel;
        if (!vc) {
            return msg.channel.send("Please join a voice channel first! :x:");
        } else {
            let result = await searcher.search(args.join(" "), { type: "video" })
            const songInfo = await ytdl.getInfo(result.first.url)

            let song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };

            if (!serverQueue) {
                const queueConstructor = {
                    txtChannel: msg.channel,
                    vChannel: vc,
                    connection: null,
                    songs: [],
                    volume: 10,
                    playing: true
                };
                queue.set(msg.guild.id, queueConstructor);

                queueConstructor.songs.push(song);

                try {
                    const connection = await vc.join();
                    queueConstructor.connection = connection;
                    play(msg.guild, queueConstructor.songs[0]);
                } catch (err) {
                    console.error(err);
                    queue.delete(msg.guild.id);
                    return msg.channel.send(`Unable to join the voice channel. :x:`)
                }
            } else {
                serverQueue.songs.push(song);
                return msg.channel.send(`The song has been added \`${song.title}\``);
            }
        }
    }
    function play(guild, song) {
        const serverQueue = queue.get(guild.id);
        if (!song) {
            serverQueue.vChannel.leave();
            queue.delete(guild.id);
            return;
        }
        const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on('finish', () => {
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
        serverQueue.txtChannel.send(`Now playing \`${song.title}\``)
    }
    function stop(msg, serverQueue) {
        if (!msg.member.voice.channel)
            return msg.channel.send("You need to join the voice channel first! :x:")
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
    function skip(msg, serverQueue) {
        if (!msg.member.voice.channel)
            return msg.channel.send("You need to join the voice channel first! :x:");
        if (!serverQueue)
            return msg.channel.send("There is nothing to skip! :x:");
        serverQueue.connection.dispatcher.end();
    }
    function pause(msg, serverQueue) {
        if (!msg.member.voice.channel)
            return msg.channel.send("You need to join the voice channel first! :x:");
        serverQueue.connection.dispatcher.pause();
    }
    function resume(msg, serverQueue) {
        if (!msg.member.voice.channel)
            return msg.channel.send("You need to join the voice channel first! :x:");
        serverQueue.connection.dispatcher.resume();
    }
}

export default song;