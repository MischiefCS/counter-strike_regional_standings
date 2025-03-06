### Roster Details<br />
Team Name: TEAM NEXT LEVEL<br />
Roster: cairne, Dawy, Flierax, nifee, onic<br />
Global Rank: [82](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [57]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  650.3<br />
<br />
Final Rank Value (650.3) = Starting Rank Value (664.5) + Head To Head Adjustments (-14.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.5
- 400 + ( ( 0.114 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 664.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       94 | 2025-02-23 | Inner Circle Esports | L   | 0.537      | -            | -                | -                | -         |   -11.69 | cairne, Dawy, Flierax, nifee, onic     |
|            6 |      367 | 2025-02-10 | Nemiga Gaming        | L   | 0.451      | -            | -                | -                | -         |    -5.89 | cairne, Dawy, Flierax, nifee, onic     |
|            5 |      376 | 2025-02-10 | Team Falcons         | L   | 0.449      | -            | -                | -                | -         |    -0.01 | cairne, Dawy, Flierax, nifee, onic     |
|            4 |      433 | 2025-02-08 | Ex-Daystar           | W   | 0.439      | 0.143        | 0.000 (0.000)    | 0.080 (0.005)    | 0 (0.000) |     2.57 | cairne, Dawy, Flierax, nifee, s-chilla |
|            3 |      438 | 2025-02-08 | OG                   | L   | 0.439      | -            | -                | -                | -         |    -8.12 | cairne, Dawy, Flierax, nifee, s-chilla |
|            2 |      450 | 2025-02-08 | CYBERSHOKE Esports   | W   | 0.438      | 0.143        | 0.013 (0.001)    | 1.000 (0.063)    | 0 (0.000) |     9.41 | cairne, Dawy, Flierax, nifee, s-chilla |
|            1 |      948 | 2024-12-09 | TEAM NEXT LEVEL      | L   | 0.031      | -            | -                | -                | -         |    -0.49 | ch1rs, Dawy, Flierax, nifee, Psycho    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($101.30)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.085 | $1,197.67      | $101.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
