### Roster Details<br />
Team Name: Kitsune Kenko<br />
Roster: KayC, nAAtz, Pixar, Queen_za, scorpz<br />
Global Rank: [228](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [34]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  644.6<br />
<br />
Final Rank Value (644.6) = Starting Rank Value (631.2) + Head To Head Adjustments (13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.2
- 400 + ( ( 0.118 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 631.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1130 | 2024-12-28 | Boo Bees               | W   | 0.779      | 0.233        | 0.001 (0.000)    | 0.059 (0.011)    | 0 (0.000) |    11.89 | KayC, nAAtz, Pixar, Queen_za, scorpz |
|            6 |     1466 | 2024-12-14 | Boo Bees               | L   | 0.686      | -            | -                | -                | -         |   -11.59 | Cjay, KayC, Pixar, Queen_za, S1R3N   |
|            5 |     1759 | 2024-12-07 | Boo Bees               | W   | 0.639      | 0.233        | 0.001 (0.000)    | 0.059 (0.009)    | 0 (0.000) |    10.07 | KayC, mu, nAAtz, Pixar, scorpz       |
|            4 |     2146 | 2024-11-30 | Boo Bees               | L   | 0.592      | -            | -                | -                | -         |    -9.50 | KayC, mu, nAAtz, Pixar, scorpz       |
|            3 |     2626 | 2024-11-16 | INVICTTA               | W   | 0.500      | 0.233        | 0.000 (0.000)    | 0.028 (0.003)    | 0 (0.000) |     5.11 | KayC, mu, nAAtz, Pixar, scorpz       |
|            2 |     2635 | 2024-11-16 | Aperture Gaming Female | W   | 0.499      | 0.233        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.29 | KayC, mu, nAAtz, Pixar, scorpz       |
|            1 |     3204 | 2024-11-02 | Team queenza           | W   | 0.406      | 0.233        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.17 | KayC, nAAtz, Pixar, Queen_za, scorpz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,005.20)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.779 | $350.00        | $272.68         |
| 2024-12-14 |      0.686 | $150.00        | $102.91         |
| 2024-12-07 |      0.639 | $350.00        | $223.71         |
| 2024-11-30 |      0.592 | $150.00        | $88.83          |
| 2024-11-16 |      0.500 | $350.00        | $174.86         |
| 2024-11-02 |      0.406 | $350.00        | $142.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
