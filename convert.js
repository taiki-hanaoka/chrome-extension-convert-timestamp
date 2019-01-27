$(function () {
    // 現在時刻の日付とタイムスタンプを初期表示
    $('[data-element-id="converted-date"]').text(timestampToDate(parseInt(new Date / 1000)));
    $('[data-element-id="converted-timestamp"]').text(Math.floor(new Date() / 1000));

    // 日付変換ボタンを押した際の処理
    $('[data-element-id="convert-to-date-button"]').on('click', function () {
        let timestamp = timestampToDate($('[data-element-id="convert-target-timestamp"]').val());
        $('[data-element-id="converted-date"]').text(timestamp);
    });

    // タイムスタンプ変換ボタンを押した際の処理
    $('[data-element-id="convert-to-timestamp-button"]').on('click', function () {
        let timestamp = dateToTimestamp($('[data-element-id="convert-target-date"]').val());
        $('[data-element-id="converted-timestamp"]').text(timestamp);
    });

    // タイムスタンプ → 日付へ変換する処理
    function timestampToDate(timestamp) {
        let date = new Date(timestamp * 1000);
        let year = date.getFullYear();
        let month = zeroPadding(date.getMonth() + 1);
        let day = zeroPadding(date.getDate());
        let hour = zeroPadding(date.getHours());
        let minutes = zeroPadding(date.getMinutes());
        let seconds = zeroPadding(date.getSeconds());

        return year + '/' + month + '/' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    }

    // 日付 → タイムスタンプへ変換する処理
    function dateToTimestamp(date) {
        return Date.parse(date.replace(/-/g, '/')) / 1000;
    }

    // 渡された値をゼロ埋めして返す処理
    function zeroPadding(data) {
        return data < 10 ? '0' + data : data;
    }
});