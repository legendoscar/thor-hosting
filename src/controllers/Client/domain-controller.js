

/* The route controller for the domain page */
exports.index = (req, res) => {

    domains = () => {

        return [
            {
                ownerID: false,
                domain: 'oscar',
                ext: 'com',
                subdomainCount: 3,
                subdomainMax: 10,
                subdomainList: ['blog', 'app', 'docs'],
                nextDue: '09/11/2021',
                status: true,
                statusClass: 'success'
            },
            {
                ownerID: true,
                domain: 'losintech',
                ext: 'ng',
                subdomainCount: 3,
                subdomainMax: 10,
                subdomainList: ['blog', 'app', 'docs'],
                nextDue: '09/11/2023',
                status: false,
                statusClass: 'danger'
            },
            {
                ownerID: true,
                domain: 'losindemy',
                ext: 'com',
                subdomainCount: 3,
                subdomainMax: 10,
                subdomainList: ['blog', 'app', 'docs'],
                nextDue: '09/11/2023',
                status: true,
                statusClass: 'success'
            }
        ]
    }
    res.render('client/domains', {layout: 'client_layout', domains: domains()});
}

/* The route controller for the new domain page */
exports.new = (req, res) => {
    res.render('client/domain-new', {layout: 'client_layout'});
    // res.send('new domain page');
}


exports.domainItem = (req, res) => {
    res.render('client/domain-item', {layout: 'client_layout'});
}