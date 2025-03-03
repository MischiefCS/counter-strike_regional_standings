### Roster Details<br />
Team Name: Team Aldikon<br />
Roster: Al1eNN, Aldikon, bluewat3r, Botpa1, proksa<br />
Global Rank: [88](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [60]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  828.9<br />
<br />
Final Rank Value (828.9) = Starting Rank Value (804.4) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.376[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 804.4
- 400 + ( ( 0.207 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 804.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1688 | 2024-12-08 | 69peek             | W   | 0.646      | 0.143        | 0.001 (0.000)    | 0.144 (0.013)    | 1 (0.646) |     8.32 | Al1eNN, Aldikon, bluewat3r, Botpa1, proksa |
|            7 |     1692 | 2024-12-08 | Asdmix             | W   | 0.646      | 0.143        | 0.000 (0.000)    | 0.108 (0.010)    | 1 (0.646) |     5.09 | Al1eNN, Aldikon, bluewat3r, Botpa1, proksa |
|            6 |     1697 | 2024-12-08 | 69peek             | L   | 0.645      | -            | -                | -                | -         |   -12.19 | Al1eNN, Aldikon, bluewat3r, Botpa1, proksa |
|            5 |     1701 | 2024-12-08 | Dmoai              | W   | 0.645      | 0.143        | 0.000 (0.000)    | 0.108 (0.010)    | 1 (0.645) |     3.02 | Al1eNN, Aldikon, bluewat3r, Botpa1, proksa |
|            4 |     1716 | 2024-12-07 | PH SunShine        | W   | 0.644      | 0.143        | 0.000 (0.000)    | 0.072 (0.007)    | 1 (0.644) |     3.90 | Al1eNN, Aldikon, bluewat3r, Botpa1, proksa |
|            3 |     1722 | 2024-12-07 | Asdmix             | W   | 0.643      | 0.143        | 0.000 (0.000)    | 0.108 (0.010)    | 1 (0.643) |     4.89 | Al1eNN, Aldikon, bluewat3r, Botpa1, proksa |
|            2 |     2035 | 2024-12-01 | RAGE (Kazakh team) | W   | 0.600      | 0.143        | 0.005 (0.000)    | 0.077 (0.007)    | 0 (0.000) |     6.18 | Al1eNN, Aldikon, ARSPOWER, Botpa1, dan4o   |
|            1 |     2059 | 2024-12-01 | MYSKILL            | W   | 0.599      | 0.143        | 0.001 (0.000)    | 0.123 (0.011)    | 0 (0.000) |     5.26 | Al1eNN, Aldikon, ARSPOWER, Botpa1, dan4o   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($381.03)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.646 | $589.48        | $381.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
