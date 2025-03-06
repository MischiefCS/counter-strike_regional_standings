### Roster Details<br />
Team Name: Big W<br />
Roster: Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN<br />
Global Rank: [166](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [18]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  660.7<br />
<br />
Final Rank Value (660.7) = Starting Rank Value (674.8) + Head To Head Adjustments (-14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.8
- 400 + ( ( 0.142 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 674.8


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
|            8 |        9 | 2025-02-28 | Victores Sumus   | L   | 1.000      | -            | -                | -                | -         |   -12.63 | Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN |
|            7 |       20 | 2025-02-26 | Flashback Gaming | L   | 1.000      | -            | -                | -                | -         |   -11.38 | Crazy_Gamer, CycloneF, hattyg0d, N1kace, SpawN |
|            6 |      883 | 2024-12-14 | Gods Reign       | L   | 0.684      | -            | -                | -                | -         |    -5.38 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            5 |      885 | 2024-12-13 | St4rboys         | W   | 0.683      | 0.262        | 0.002 (0.000)    | 0.039 (0.007)    | 0 (0.000) |     9.56 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            4 |     1416 | 2024-11-16 | Flashback Gaming | L   | 0.503      | -            | -                | -                | -         |    -6.07 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            3 |     1436 | 2024-11-16 | Gods Reign       | W   | 0.498      | 0.143        | 0.014 (0.001)    | 0.360 (0.026)    | 1 (0.498) |    12.15 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            2 |     1816 | 2024-10-27 | Gods Reign       | L   | 0.364      | -            | -                | -                | -         |    -2.36 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |
|            1 |     1818 | 2024-10-26 | ROG Academy      | W   | 0.363      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.02 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |

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
