### Roster Details<br />
Team Name: Team Sampi<br />
Roster: fino, sAvana1, semtex, The eLiVe, ZEDKO<br />
Global Rank: [114](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [79]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  662.6<br />
<br />
Final Rank Value (662.6) = Starting Rank Value (674.2) + Head To Head Adjustments (-11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.157[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.046[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.2
- 400 + ( ( 0.126 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 674.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      992 | 2024-12-07 | CYBERSHOKE Esports     | L   | 0.203      | -            | -                | -                | -         |    -1.94 | fino, sAvana1, semtex, The eLiVe, ZEDKO  |
|            7 |     1033 | 2024-12-05 | Insilio                | L   | 0.192      | -            | -                | -                | -         |    -4.09 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            6 |     1049 | 2024-12-05 | Tricked Esport         | L   | 0.189      | -            | -                | -                | -         |    -2.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            5 |     1067 | 2024-12-04 | FLuffy Gangsters       | L   | 0.185      | -            | -                | -                | -         |    -2.96 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            4 |     1136 | 2024-12-01 | Betclic Apogee Esports | L   | 0.163      | -            | -                | -                | -         |    -1.68 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            3 |     1264 | 2024-11-24 | BRUTE                  | W   | 0.116      | 0.143        | 0.002 (0.000)    | 0.055 (0.001)    | 1 (0.116) |     1.80 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            2 |     1292 | 2024-11-23 | UNiTY esports          | L   | 0.109      | -            | -                | -                | -         |    -1.55 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            1 |     1306 | 2024-11-22 | ENTERPRISE Genesis     | W   | 0.105      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.105) |     1.01 | fino, manguss, sAvana1, The eLiVe, ZEDKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($576.20)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.117 | $4,932.95      | $576.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
