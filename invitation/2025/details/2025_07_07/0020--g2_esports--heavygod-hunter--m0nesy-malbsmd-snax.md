### Roster Details<br />
Team Name: G2 Esports<br />
Roster: HeavyGod, huNter-, m0NESY, malbsMd, Snax<br />
Global Rank: [20](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1078.3<br />
<br />
Final Rank Value (1078.3) = Starting Rank Value (1070.2) + Head To Head Adjustments (8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1070.2
- 400 + ( ( 0.272 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1070.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      586 | 2025-02-03 | FaZe Clan    | L   | 0.172      | -            | -                | -                | -         |    -0.07 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            6 |      601 | 2025-02-02 | Team Falcons | W   | 0.164      | 1.000        | 1.000 (0.164)    | 0.721 (0.118)    | 1 (0.164) |     5.14 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            5 |      615 | 2025-02-01 | Virtus.pro   | L   | 0.158      | -            | -                | -                | -         |    -0.24 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            4 |      657 | 2025-01-25 | Eternal Fire | L   | 0.111      | -            | -                | -                | -         |    -0.04 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            3 |      666 | 2025-01-23 | BetBoom Team | W   | 0.098      | 0.769        | 0.060 (0.005)    | 0.299 (0.023)    | 1 (0.098) |     0.70 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            2 |      668 | 2025-01-19 | BIG          | W   | 0.072      | 0.363        | 0.252 (0.007)    | 0.421 (0.011)    | 0 (0.000) |     1.91 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            1 |      676 | 2025-01-17 | B8           | W   | 0.059      | 0.363        | 0.162 (0.003)    | 0.938 (0.020)    | 0 (0.000) |     0.62 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,434.03)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.211 | $16,000.00     | $3,377.78       |
| 2025-01-26 |      0.117 | $17,500.00     | $2,056.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
