function pairElement(str) {
    return [...str].reduce((acc, char) => {
        let DnaPair = [char];
        switch (char){
            case 'C':
                DnaPair.push('G');
                break;
            case 'G':
                DnaPair.push('C');
                break;
            case 'A':
                DnaPair.push('T');
                break;
            case 'T':
                DnaPair.push('A');
                break;
        }
        acc.push(DnaPair);
        return acc;
    },[]);
}

pairElement("GCG");
