### Roster Details<br />
Team Name: Dragon Esports Club<br />
Roster: auth0ri, fakerealityy, hodix, Kiy0o, Shlyaperson<br />
Global Rank: [472](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [295]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  567.0<br />
<br />
Final Rank Value (567.0) = Starting Rank Value (571.1) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.197[<sup>1</sup>](#table2)
- Bounty Collected: 0.145[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.086<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 571.1
- 400 + ( ( 0.086 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 571.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5771 | 2024-09-29 | Fragmatic             | L   | 0.183      | -            | -                | -                | -         |    -2.82 | auth0ri, fakerealityy, hodix, Kiy0o, Shlyaperson  |
|            5 |     6779 | 2024-09-14 | Passion UA            | L   | 0.086      | -            | -                | -                | -         |    -0.10 | auth0ri, DMBPWR, fakerealityy, hodix, Shlyaperson |
|            4 |     6815 | 2024-09-14 | TryHearts             | L   | 0.084      | -            | -                | -                | -         |    -1.70 | auth0ri, DMBPWR, fakerealityy, hodix, Shlyaperson |
|            3 |     7182 | 2024-09-07 | Inroads Esports       | W   | 0.039      | 1.000        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.49 | auth0ri, DMBPWR, fakerealityy, hodix, Shlyaperson |
|            2 |     7386 | 2024-09-05 | THE GENTLEMEN ESPORTS | L   | 0.026      | -            | -                | -                | -         |    -0.22 | auth0ri, DMBPWR, fakerealityy, hodix, Shlyaperson |
|            1 |     7541 | 2024-09-03 | SINNERS Academy       | W   | 0.011      | 1.000        | 0.001 (0.000)    | 0.111 (0.001)    | 0 (0.000) |     0.26 | auth0ri, DMBPWR, fakerealityy, hodix, Shlyaperson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24.67)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      0.185 | $72.89         | $13.48          |
| 2024-09-15 |      0.093 | $120.84        | $11.18          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
