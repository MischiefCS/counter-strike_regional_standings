### Roster Details<br />
Team Name: Sharks Esports<br />
Roster: doc, gafolo, koala, Nicks, rdnzao<br />
Global Rank: [34](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [8]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  790.9<br />
<br />
Final Rank Value (790.9) = Starting Rank Value (787.1) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.1
- 400 + ( ( 0.157 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 787.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      103 | 2025-02-22 | Imperial Esports       | L   | 0.300      | -            | -                | -                | -         |    -3.67 | doc, gafolo, koala, Nicks, rdnzao |
|            8 |      108 | 2025-02-22 | ODDIK                  | W   | 0.298      | 0.371        | 0.009 (0.001)    | 0.638 (0.071)    | 0 (0.000) |     3.95 | doc, gafolo, koala, Nicks, rdnzao |
|            7 |      127 | 2025-02-21 | Swingers               | W   | 0.292      | 0.371        | 0.005 (0.000)    | 0.395 (0.043)    | 0 (0.000) |     3.60 | doc, gafolo, koala, Nicks, rdnzao |
|            6 |      153 | 2025-02-20 | Bounty Hunters Esports | W   | 0.286      | 0.371        | 0.000 (0.000)    | 0.358 (0.038)    | 0 (0.000) |     1.69 | doc, gafolo, koala, Nicks, rdnzao |
|            5 |      306 | 2025-02-12 | Fluxo                  | L   | 0.232      | -            | -                | -                | -         |    -4.10 | doc, gafolo, koala, Nicks, rdnzao |
|            4 |      324 | 2025-02-11 | Imperial Esports       | W   | 0.227      | 0.143        | 0.061 (0.002)    | 0.910 (0.029)    | 0 (0.000) |     4.42 | doc, gafolo, koala, Nicks, rdnzao |
|            3 |      330 | 2025-02-11 | Legacy                 | L   | 0.226      | -            | -                | -                | -         |    -3.95 | doc, gafolo, koala, Nicks, rdnzao |
|            2 |      400 | 2025-02-09 | MIBR                   | L   | 0.211      | -            | -                | -                | -         |    -0.82 | doc, gafolo, koala, Nicks, rdnzao |
|            1 |      458 | 2025-02-08 | BESTIA                 | W   | 0.205      | 0.143        | 0.007 (0.000)    | 0.333 (0.010)    | 0 (0.000) |     2.66 | doc, gafolo, koala, Nicks, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,201.30)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.300 | $4,000.00      | $1,201.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
