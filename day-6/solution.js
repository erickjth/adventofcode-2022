function getMessageMarketEndIndex(buffer, messageCount) {
	let found;
	let start = 0;
	let end = messageCount;
	while (start < buffer.length - 1) {
		const firstFourth = buffer.slice(start, Math.min(end, buffer.length - 1));
		const totalDiff = [...new Set(firstFourth)].length;

		if (totalDiff === messageCount) {
			found = end;
			break;
		}

		start++;
		end++
	}

	console.log(found);
}

// Examples 1
getMessageMarketEndIndex('bvwbjplbgvbhsrlpgdmjqwftvncz', 4);
getMessageMarketEndIndex('nppdvjthqldpwncqszvftbrmjlhg', 4);
getMessageMarketEndIndex('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 4);
getMessageMarketEndIndex('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 4);

// Part 1
getMessageMarketEndIndex('srlsrsnnwhwwmddwfddgldlglppcnpptftzzchzhbhmmvwmvwvvjsjnjbbvbmvmnmqmfmjfjjmllzddrvrrnsncnznndwwqrqjjsfsjsjsvsvzvtvfvrvhhbwwltttbhhvphhtqqnffsppdqqrmmfrmfrrwvrvrsvrsrzssrqqrfqrfrttqntnpttvrrcncnfftjfjwwfwjwpwwltlwwwvnvcnvvdgvddqlddnllrggqvgvzzjddfgdfdgfffsbfsffjmffprrmgmtmqqgzzlwldlbbgjjnfjnnvlnnlbbnjnzngglmggwtgwttnvtnvndndmnmdmcddzbdbbspbpwbpplvpvnnmtmqqwnwgglhghdhbhqbhhqrqhqcqmmmrwwlvvfnvfnnpddbfbgfgqglgddrggbgbqqfwfjfdjfflzldlbbsbbtftccgqggzgdglglzljjzbzfbzffgftfvtfvvvjmjzjmjfjqqccpcjppzfpzzsvvzjvvfgfmgffzhhdphdpdwdwmdwwlqljjzffzvfzfwzfzcztctssdpssndssvbbtbstbtnngjjspplttpffjggbbqsqnqcncscpcmccbmbdbtbcbbgqgwgwqgwgwsszqznzvvntvvmlvlvqqvgvwgwlldbblclqcqggtqqlsqlsqlqcczzqgghmgmrgmrggljlbjbsbsmmnlmmdppnpfnnvhnnzggchgggbwwvtvpptgpplsljjshhnphhblbnbpbgppfllhsllbtlbtllrprqrvvfgvgpgcpcdddjjplpssjrjqjggncnzccqdqfqpffvddhlhdllgzzrtrztrztzptztwwbjbnjnsjsfsbfbdbccnhnmhnhrhwhfhbbtzbtztzrttrzrfrcrtctqqrlrsshphwphwpwwcmczzpqzqztqqvzzshhddrvdrrztrrqcqbcqbbhnnpfnpfnnmcnmnccnmmhccjjwzwcwbwcwnngtnngrngnsnzzcvvvtnvvtpvtpvtvvhffbsfsnsdsmmzbbrqbqpbpcpdppzmzbmmtdmttvgvrvlrvvhddjgdjdbbthtjhjdjhdjjmssdldjllwppvbvnbnlbbbszbblpbpfbpblbzzszvssbcbgcghgbbcpbbqrrdjdnnjcjddjcdjjcqqhggflftftfhttvlttgdtdrttwppwvvrzzbggrjjmssrjsjmssdtttdbdvddpllpgllthhvfvhvddrhhnznwznwzzpbblvvpmvpmpddjvdvcddvsshfhrrghgnhghmhhmhffrsfrflrfrjrddzgzsggchcfhhsbbsrszzgjggnrrgfffhthdthtnhtntllsjjjwqqsbsttbtzbttlfttczzbfbwfwvvhllltjjsqsdqqspqsszqzhhdrrhccgbcgggcbggnvgvmmwcmmpqmqccshsnnnwrwfrrwrllvhvlvmlvljjgrgvrvddfqfwqfqlfqqqppvmvrmrfrvrwrqrjqrrvmrvmrrvffmtffsfdfdrdwrwjrrcgcwwcdwdrdnrnzztqzzzgdzgdgldltdtvtnnhllrtltbtrbbttgssdhsssrmsscnssmtmqqtssmzzjqzqddfrdrtdrdpdzzppwggsrrfvfnvvmgvgmmdnnbwnntlnntncchcmcjmmvzzzngznnbgbnbnvbvzzfqqmtmrmcmqmvmbmbmcmscsjcsshswsjsvswshwwlnnsslmslmmzgmgsmssrwwmjwmwllvbvppplmmwgmgzgzdgzdgzztrtzzchcssbppdbbmvmqmmzhztzdtzdznnqhhmcmnnncbnngjnjmjnmmqqsnqsnslnlqlppvbvwwvtwtfwtfmzsbdjfvhzcflstpbtprpzmwcwwgzshfssnjdgflcsfglhbvvdctfrccfmwgfvjtvqfqpzzmqtlbvrjqwlwclfzhfzcmwsvprdhzcrghdscprrnqgdgmhhwbcfcfzrcgrwvbstpwbcvcnpmftwwthnsjznzslfdfqhtpsgmjsddmhlhtlzfsnhlcbgnqpqbzppnbcgtzvwdpmgftgsmrwjqwsdnjrrmwrmlcvlqgwldnvmsgnwccwzmdzwdhpmpqffgbnrrrvzqhtlnvqfhgwbbwsghwbrjzjcjmjmsspcmnfbbpmwffbdqffqfwsvtcrghbnldspdhjhjvtdhgmvrzqqlhvnwbdhfprwqdtzswfdzdwhzvfzsfqlzcflhbsvjhnjnthrdrgmjrrbftflpvrmrvvsgnjhrhjffvznmbjtshwgjmcqbfqjlptsrcgzvrhctwsdclrstmsbsbpqpjcvftmvmsmpwmmphlwmljhvllhrmfcncdprrwfmqrlllmsrvrwtbsqddbmblhvqqlcbbtjbslggrshflrddsphbvzhprcvbpmfldnmwtchddbdwhwpgbmjqptsbdzhrbqfwgfltchsggjlbqbhmzbjdncnvsqjvftpwrpdcjzsrvrlzwqfptwzssqpltjhdmtmmgvjzzqswwrsqrqfpdllgzsdlvhfdnzlrmlqdclwhqqbtwdqcrlfdjphjvcfzpwwgphmrldnwjpnmsjnqpwtwglcbthmcbnvpmjbdhmjglgccsmrmbvbqphdlbrrgnbljlhqvgqbctmthvmsfzflwvctwmdgmrlhnmwnsjtzndlwfttcvtslppjwsgbzhztlpzhmjlrbtzfnblwwlddzwqvzbjmffbflvmvnsgjlqwjqvrcrtwbhfzbzzmtwsndqmtnbjbsqjpnwhzqgwwltwgrqfbhjtpzrqvvhgjsbzqmfdsmzjdnplvblvqlrtzsbjgdptdhgvvrblbjppnnhhnvqtmjgwqzwtmjglrjlwsrfdjfmzlsszzzpbwvjbwpcwlplhcmhgpclztjcrmcntnqbnlrmcnhcnhnmjggtqbtvcfmcbdpqhdrvspbrgcwhgjhggwpvjbplhdsnnvgbzhmcrjqvqlwsdvrrnntmwdgdqdvzznjflctlfmfzsdfbpftsscnbtnqcsvtltvnsqpghzcwtjctvwqqnvnddlzbftwrdqzltpczrbmvsmlpfjzphtpnngzdfrjqrtbppbvztsddblspbltsnrtdftmwbblgdqvmscjqpwfvdzphwqgrbpdfcvtvmddgjjpswrqnwjfghtzwzbhtjnwjsrnwhjwcwnrtwrmbmqjhrbmbsslnvtsqnlbzlfdjvmnlhccpzmvpmrnttnshdjsswjlbtpwdwgmzqcthbczngwnfpzbmmrdffqsbrmsgzrtpsstfmdgbclwthflfbzvtptdfpzznvdwncqzvjwsmczwcnwgjpffcbhrtmtnbtjgcvtwdjtrftjwgvzmlfvgdjjjgsftzctplmjjmqfdzzwrtfmwqhwzglwbvsdvtgphsmngvppvlfdjdrzhhzsrvqgfwjbqdqlrwbgdmrglzrchvgwlhhwbvhfszntbrhshvqdznfvngdmhctjnlfhsmchqbqhdtmlntsnpvdzrvwjcjflfqgnprcpscfcmlgbwzmbnfdfnbwngrrbpnvbcdfgcpgtwmtbzptsdvjhwnzpsffglnqlczgsrdzshrfpqtqbmsrgzwwjvqhzjfzldcggvfhtcvzsgfspnlgtjfglwcnbprvssdfbtzqbblzjzmtftfcfprlwsvswjvtpzcpfphvmdnbczzjbjjrpwrncdszrtqjvznvgzcwdvpfvfcqlsdmhsswpnfsvtffnjhstcznwghlpmmqbnhqtddbjdrpvfhgdwjcnfgggmwnqhmsvgzsssbfcfrmbwpfqhrmtdvhbpwzggdvfjnlrgmvjjbqhjmbvszfzdcwrcjhfdczbhmcrwngmrgrldvbjjdgddhbbvqvwztfstfzqnqwvmmdzhzqtrmnqfrhmtdfhrgfqclpqdwthrbgsprccwcsvdbnclglgflhtqstvpwrmnsvflpplrgftlvjwttmdcqwjnbttjqqlwsntplmfrncqzplwgrjpzljtmnwsqfqnzgnrbtscbfzqwnqttnghcgl', 4);

// Examples 2
getMessageMarketEndIndex('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14);
getMessageMarketEndIndex('bvwbjplbgvbhsrlpgdmjqwftvncz', 14);
getMessageMarketEndIndex('nppdvjthqldpwncqszvftbrmjlhg', 14);
getMessageMarketEndIndex('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14);
getMessageMarketEndIndex('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14);

// Part 2
getMessageMarketEndIndex('srlsrsnnwhwwmddwfddgldlglppcnpptftzzchzhbhmmvwmvwvvjsjnjbbvbmvmnmqmfmjfjjmllzddrvrrnsncnznndwwqrqjjsfsjsjsvsvzvtvfvrvhhbwwltttbhhvphhtqqnffsppdqqrmmfrmfrrwvrvrsvrsrzssrqqrfqrfrttqntnpttvrrcncnfftjfjwwfwjwpwwltlwwwvnvcnvvdgvddqlddnllrggqvgvzzjddfgdfdgfffsbfsffjmffprrmgmtmqqgzzlwldlbbgjjnfjnnvlnnlbbnjnzngglmggwtgwttnvtnvndndmnmdmcddzbdbbspbpwbpplvpvnnmtmqqwnwgglhghdhbhqbhhqrqhqcqmmmrwwlvvfnvfnnpddbfbgfgqglgddrggbgbqqfwfjfdjfflzldlbbsbbtftccgqggzgdglglzljjzbzfbzffgftfvtfvvvjmjzjmjfjqqccpcjppzfpzzsvvzjvvfgfmgffzhhdphdpdwdwmdwwlqljjzffzvfzfwzfzcztctssdpssndssvbbtbstbtnngjjspplttpffjggbbqsqnqcncscpcmccbmbdbtbcbbgqgwgwqgwgwsszqznzvvntvvmlvlvqqvgvwgwlldbblclqcqggtqqlsqlsqlqcczzqgghmgmrgmrggljlbjbsbsmmnlmmdppnpfnnvhnnzggchgggbwwvtvpptgpplsljjshhnphhblbnbpbgppfllhsllbtlbtllrprqrvvfgvgpgcpcdddjjplpssjrjqjggncnzccqdqfqpffvddhlhdllgzzrtrztrztzptztwwbjbnjnsjsfsbfbdbccnhnmhnhrhwhfhbbtzbtztzrttrzrfrcrtctqqrlrsshphwphwpwwcmczzpqzqztqqvzzshhddrvdrrztrrqcqbcqbbhnnpfnpfnnmcnmnccnmmhccjjwzwcwbwcwnngtnngrngnsnzzcvvvtnvvtpvtpvtvvhffbsfsnsdsmmzbbrqbqpbpcpdppzmzbmmtdmttvgvrvlrvvhddjgdjdbbthtjhjdjhdjjmssdldjllwppvbvnbnlbbbszbblpbpfbpblbzzszvssbcbgcghgbbcpbbqrrdjdnnjcjddjcdjjcqqhggflftftfhttvlttgdtdrttwppwvvrzzbggrjjmssrjsjmssdtttdbdvddpllpgllthhvfvhvddrhhnznwznwzzpbblvvpmvpmpddjvdvcddvsshfhrrghgnhghmhhmhffrsfrflrfrjrddzgzsggchcfhhsbbsrszzgjggnrrgfffhthdthtnhtntllsjjjwqqsbsttbtzbttlfttczzbfbwfwvvhllltjjsqsdqqspqsszqzhhdrrhccgbcgggcbggnvgvmmwcmmpqmqccshsnnnwrwfrrwrllvhvlvmlvljjgrgvrvddfqfwqfqlfqqqppvmvrmrfrvrwrqrjqrrvmrvmrrvffmtffsfdfdrdwrwjrrcgcwwcdwdrdnrnzztqzzzgdzgdgldltdtvtnnhllrtltbtrbbttgssdhsssrmsscnssmtmqqtssmzzjqzqddfrdrtdrdpdzzppwggsrrfvfnvvmgvgmmdnnbwnntlnntncchcmcjmmvzzzngznnbgbnbnvbvzzfqqmtmrmcmqmvmbmbmcmscsjcsshswsjsvswshwwlnnsslmslmmzgmgsmssrwwmjwmwllvbvppplmmwgmgzgzdgzdgzztrtzzchcssbppdbbmvmqmmzhztzdtzdznnqhhmcmnnncbnngjnjmjnmmqqsnqsnslnlqlppvbvwwvtwtfwtfmzsbdjfvhzcflstpbtprpzmwcwwgzshfssnjdgflcsfglhbvvdctfrccfmwgfvjtvqfqpzzmqtlbvrjqwlwclfzhfzcmwsvprdhzcrghdscprrnqgdgmhhwbcfcfzrcgrwvbstpwbcvcnpmftwwthnsjznzslfdfqhtpsgmjsddmhlhtlzfsnhlcbgnqpqbzppnbcgtzvwdpmgftgsmrwjqwsdnjrrmwrmlcvlqgwldnvmsgnwccwzmdzwdhpmpqffgbnrrrvzqhtlnvqfhgwbbwsghwbrjzjcjmjmsspcmnfbbpmwffbdqffqfwsvtcrghbnldspdhjhjvtdhgmvrzqqlhvnwbdhfprwqdtzswfdzdwhzvfzsfqlzcflhbsvjhnjnthrdrgmjrrbftflpvrmrvvsgnjhrhjffvznmbjtshwgjmcqbfqjlptsrcgzvrhctwsdclrstmsbsbpqpjcvftmvmsmpwmmphlwmljhvllhrmfcncdprrwfmqrlllmsrvrwtbsqddbmblhvqqlcbbtjbslggrshflrddsphbvzhprcvbpmfldnmwtchddbdwhwpgbmjqptsbdzhrbqfwgfltchsggjlbqbhmzbjdncnvsqjvftpwrpdcjzsrvrlzwqfptwzssqpltjhdmtmmgvjzzqswwrsqrqfpdllgzsdlvhfdnzlrmlqdclwhqqbtwdqcrlfdjphjvcfzpwwgphmrldnwjpnmsjnqpwtwglcbthmcbnvpmjbdhmjglgccsmrmbvbqphdlbrrgnbljlhqvgqbctmthvmsfzflwvctwmdgmrlhnmwnsjtzndlwfttcvtslppjwsgbzhztlpzhmjlrbtzfnblwwlddzwqvzbjmffbflvmvnsgjlqwjqvrcrtwbhfzbzzmtwsndqmtnbjbsqjpnwhzqgwwltwgrqfbhjtpzrqvvhgjsbzqmfdsmzjdnplvblvqlrtzsbjgdptdhgvvrblbjppnnhhnvqtmjgwqzwtmjglrjlwsrfdjfmzlsszzzpbwvjbwpcwlplhcmhgpclztjcrmcntnqbnlrmcnhcnhnmjggtqbtvcfmcbdpqhdrvspbrgcwhgjhggwpvjbplhdsnnvgbzhmcrjqvqlwsdvrrnntmwdgdqdvzznjflctlfmfzsdfbpftsscnbtnqcsvtltvnsqpghzcwtjctvwqqnvnddlzbftwrdqzltpczrbmvsmlpfjzphtpnngzdfrjqrtbppbvztsddblspbltsnrtdftmwbblgdqvmscjqpwfvdzphwqgrbpdfcvtvmddgjjpswrqnwjfghtzwzbhtjnwjsrnwhjwcwnrtwrmbmqjhrbmbsslnvtsqnlbzlfdjvmnlhccpzmvpmrnttnshdjsswjlbtpwdwgmzqcthbczngwnfpzbmmrdffqsbrmsgzrtpsstfmdgbclwthflfbzvtptdfpzznvdwncqzvjwsmczwcnwgjpffcbhrtmtnbtjgcvtwdjtrftjwgvzmlfvgdjjjgsftzctplmjjmqfdzzwrtfmwqhwzglwbvsdvtgphsmngvppvlfdjdrzhhzsrvqgfwjbqdqlrwbgdmrglzrchvgwlhhwbvhfszntbrhshvqdznfvngdmhctjnlfhsmchqbqhdtmlntsnpvdzrvwjcjflfqgnprcpscfcmlgbwzmbnfdfnbwngrrbpnvbcdfgcpgtwmtbzptsdvjhwnzpsffglnqlczgsrdzshrfpqtqbmsrgzwwjvqhzjfzldcggvfhtcvzsgfspnlgtjfglwcnbprvssdfbtzqbblzjzmtftfcfprlwsvswjvtpzcpfphvmdnbczzjbjjrpwrncdszrtqjvznvgzcwdvpfvfcqlsdmhsswpnfsvtffnjhstcznwghlpmmqbnhqtddbjdrpvfhgdwjcnfgggmwnqhmsvgzsssbfcfrmbwpfqhrmtdvhbpwzggdvfjnlrgmvjjbqhjmbvszfzdcwrcjhfdczbhmcrwngmrgrldvbjjdgddhbbvqvwztfstfzqnqwvmmdzhzqtrmnqfrhmtdfhrgfqclpqdwthrbgsprccwcsvdbnclglgflhtqstvpwrmnsvflpplrgftlvjwttmdcqwjnbttjqqlwsntplmfrncqzplwgrjpzljtmnwsqfqnzgnrbtscbfzqwnqttnghcgl', 14);