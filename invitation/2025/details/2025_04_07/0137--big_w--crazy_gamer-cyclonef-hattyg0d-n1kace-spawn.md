### Roster Details<br />
Team Name: Big W<br />
Roster: Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN<br />
Global Rank: [137](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [15]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  663.1<br />
<br />
Final Rank Value (663.1) = Starting Rank Value (676.7) + Head To Head Adjustments (-13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.037[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.7
- 400 + ( ( 0.134 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 676.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |        9 | 2025-02-28 | Victores Sumus   | L   | 0.943      | -            | -                | -                | -         |    -9.53 | Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN |
|            7 |       20 | 2025-02-26 | Flashback Gaming | L   | 0.935      | -            | -                | -                | -         |   -10.40 | Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN |
|            6 |      883 | 2024-12-14 | Gods Reign       | L   | 0.436      | -            | -                | -                | -         |    -2.99 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            5 |      885 | 2024-12-13 | St4rboys         | W   | 0.435      | 0.262        | 0.001 (0.000)    | 0.022 (0.002)    | 0 (0.000) |     6.10 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            4 |     1416 | 2024-11-16 | Flashback Gaming | L   | 0.255      | -            | -                | -                | -         |    -2.96 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            3 |     1436 | 2024-11-16 | Gods Reign       | W   | 0.249      | 0.143        | 0.016 (0.001)    | 0.329 (0.012)    | 1 (0.249) |     6.25 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            2 |     1816 | 2024-10-27 | Gods Reign       | L   | 0.115      | -            | -                | -                | -         |    -0.71 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |
|            1 |     1818 | 2024-10-26 | ROG Academy      | W   | 0.115      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.63 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,121.05)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.949 | $572.64        | $543.60         |
| 2024-12-14 |      0.436 | $500.00        | $217.82         |
| 2024-11-16 |      0.255 | $1,183.74      | $301.88         |
| 2024-10-27 |      0.115 | $500.00        | $57.74          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
