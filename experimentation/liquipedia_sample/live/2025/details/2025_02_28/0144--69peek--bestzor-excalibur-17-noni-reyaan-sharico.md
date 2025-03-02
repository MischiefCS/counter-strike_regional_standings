### Roster Details<br />
Team Name: 69peek<br />
Roster: bestzor, EXCALIBUR-17, noni, reyaan, sharico<br />
Global Rank: [144](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [101]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  801.7<br />
<br />
Final Rank Value (801.7) = Starting Rank Value (792.8) + Head To Head Adjustments (8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.240[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.328[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 792.8
- 400 + ( ( 0.190 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 792.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1862 | 2024-12-08 | AimAssassins   | L   | 0.653      | -            | -                | -                | -         |    -5.47 | bestzor, EXCALIBUR-17, noni, reyaan, sharico |
|            5 |     1873 | 2024-12-08 | AimAssassins   | W   | 0.652      | 0.143        | 0.005 (0.000)    | 0.258 (0.024)    | 1 (0.652) |    15.38 | bestzor, EXCALIBUR-17, noni, reyaan, sharico |
|            4 |     1884 | 2024-12-08 | Yamato Esports | W   | 0.651      | 0.143        | 0.000 (0.000)    | 0.065 (0.006)    | 1 (0.651) |     3.45 | bestzor, EXCALIBUR-17, noni, reyaan, sharico |
|            3 |     1887 | 2024-12-08 | PH SunShine    | W   | 0.650      | 0.143        | 0.000 (0.000)    | 0.065 (0.006)    | 1 (0.650) |     4.95 | bestzor, EXCALIBUR-17, noni, reyaan, sharico |
|            2 |     1894 | 2024-12-07 | Asdmix         | W   | 0.650      | 0.143        | 0.000 (0.000)    | 0.097 (0.009)    | 1 (0.650) |     6.31 | bestzor, EXCALIBUR-17, noni, reyaan, sharico |
|            1 |     1898 | 2024-12-07 | PH SunShine    | L   | 0.650      | -            | -                | -                | -         |   -15.72 | bestzor, EXCALIBUR-17, noni, reyaan, sharico |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($192.35)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.653 | $294.74        | $192.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
