export default (function () {
    const yearOption = [];
    const clock = new Date();
    let latestYear = clock.getFullYear() - 1911;
    if (clock.getMonth() < 7) latestYear--;
    for (let i = 0; i < 5; ++i) {
        const yearItem = latestYear - i;
        yearOption.push({ value: yearItem, text: yearItem });
    }

    return {
        id: -1,
        year: {
            value: latestYear,
            type: 'select',
            keyName: 'year',
            wording: '申請年度',
            options: yearOption,
            remark: '例: 110年7月申請，就填寫110年。',
        },
        category: {
            value: '轉系',
            type: 'select',
            keyName: 'category',
            wording: '申請類別',
            options: [
                { value: '轉系', text: '轉系' },
                { value: '輔系', text: '輔系' },
                { value: '雙主修', text: '雙主修' },
            ],
        },
        out_maj: {
            value: '中文系',
            keyName: 'out_maj',
            type: 'select',
            wording: '原主修科系',
            options: [],
            remark: '如不想透漏，可以只填學院或其他。',
        },
        in_maj: {
            value: '中文系',
            keyName: 'in_maj',
            type: 'select',
            wording: '目標申請科系',
            options: [],
        },
        rank_1: {
            value: '',
            type: 'input',
            elementAttrs: {
                type: 'number',
                min: 1,
                max: 200,
            },
            keyName: 'rank_1',
            type: 'number',
            wording: '排名上',
        },
        rank_2: {
            value: '',
            type: 'input',
            elementAttrs: {
                type: 'number',
                min: 1,
                max: 200,
            },
            keyName: 'rank_2',
            wording: '排名下',
            remark: '如還不知道，可以留空白。',
        },
        score: {
            value: '',
            keyName: 'score',
            type: 'input',
            elementAttrs: {
                type: 'number',
                min: 50,
                max: 100,
                step: 0.1,
            },
            wording: '學年分數',
        },
        isPass: {
            value: true,
            type: 'select',
            keyName: 'isPass',
            wording: '申請結果',
            options: [
                { value: 'true', text: '通過' },
                { value: 'false', text: '未通過' },
            ],
        },
        comment: {
            value: '',
            keyName: 'comment',
            type: 'textarea',
            wording: '心得',
            width: 2,
            elementAttrs: {
                style: {
                    marginTop: '20px',
                },
            },
        },
        confirm: 'false',
    };
})();
