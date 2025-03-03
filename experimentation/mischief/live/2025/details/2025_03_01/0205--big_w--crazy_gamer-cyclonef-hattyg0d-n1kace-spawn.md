### Roster Details<br />
Team Name: Big W<br />
Roster: Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN<br />
Global Rank: [205](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [28]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  663.3<br />
<br />
Final Rank Value (663.3) = Starting Rank Value (680.1) + Head To Head Adjustments (-16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.1
- 400 + ( ( 0.143 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 680.1


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
|            8 |        9 | 2025-02-28 | Victores Sumus   | L   | 1.000      | -            | -                | -                | -         |   -16.26 | Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN |
|            7 |       20 | 2025-02-26 | Flashback Gaming | L   | 1.000      | -            | -                | -                | -         |   -11.35 | Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN |
|            6 |     1484 | 2024-12-14 | Gods Reign       | L   | 0.684      | -            | -                | -                | -         |    -5.24 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            5 |     1490 | 2024-12-13 | St4rboys         | W   | 0.683      | 0.262        | 0.002 (0.000)    | 0.036 (0.006)    | 0 (0.000) |     9.57 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            4 |     2608 | 2024-11-16 | Flashback Gaming | L   | 0.503      | -            | -                | -                | -         |    -5.76 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            3 |     2658 | 2024-11-16 | Gods Reign       | W   | 0.498      | 0.143        | 0.018 (0.001)    | 0.440 (0.031)    | 1 (0.498) |    12.40 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            2 |     3428 | 2024-10-27 | Gods Reign       | L   | 0.364      | -            | -                | -                | -         |    -2.19 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |
|            1 |     3430 | 2024-10-26 | ROG Academy      | W   | 0.363      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.97 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,692.38)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      1.000 | $572.64        | $572.64         |
| 2024-12-14 |      0.684 | $500.00        | $341.99         |
| 2024-11-16 |      0.503 | $1,183.74      | $595.85         |
| 2024-10-27 |      0.364 | $500.00        | $181.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
