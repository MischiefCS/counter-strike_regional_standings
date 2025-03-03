### Roster Details<br />
Team Name: P0RTUGAL<br />
Roster: danistzz, KaiR0N-, NickelBack, synyx, X5G7V<br />
Global Rank: [96](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [67]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  804.5<br />
<br />
Final Rank Value (804.5) = Starting Rank Value (742.3) + Head To Head Adjustments (62.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 742.3
- 400 + ( ( 0.175 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 742.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1207 | 2024-12-22 | Metizport                  | W   | 0.741      | 0.143        | 0.074 (0.008)    | 0.608 (0.064)    | 0 (0.000) |    18.33 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|            9 |     1223 | 2024-12-22 | RUSH B (Russian team)      | W   | 0.739      | 0.143        | 0.027 (0.003)    | 0.727 (0.077)    | 0 (0.000) |    13.69 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|            8 |     1527 | 2024-12-13 | NEVERMORE (Ukrainian team) | L   | 0.680      | -            | -                | -                | -         |   -10.09 | danistzz, glowiing, KaiR0N-, synyx, X5G7V   |
|            7 |     1533 | 2024-12-13 | ROYALS                     | W   | 0.680      | 0.143        | 0.001 (0.000)    | 0.104 (0.010)    | 0 (0.000) |     6.51 | danistzz, glowiing, KaiR0N-, synyx, X5G7V   |
|            6 |     1540 | 2024-12-13 | VOLT (European team)       | W   | 0.680      | 0.143        | 0.003 (0.000)    | 0.195 (0.019)    | 0 (0.000) |     8.40 | danistzz, glowiing, KaiR0N-, synyx, X5G7V   |
|            5 |     1667 | 2024-12-08 | VOLT (European team)       | W   | 0.647      | 0.143        | 0.003 (0.000)    | 0.195 (0.018)    | 0 (0.000) |     8.47 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|            4 |     1674 | 2024-12-08 | AMKAL ESPORTS              | W   | 0.647      | 0.143        | 0.017 (0.002)    | 0.315 (0.029)    | 0 (0.000) |    10.21 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|            3 |     1685 | 2024-12-08 | Kubix Esports              | W   | 0.647      | 0.143        | 0.044 (0.004)    | 0.216 (0.020)    | 0 (0.000) |    13.37 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|            2 |     3133 | 2024-11-03 | Fire Flux Esports          | L   | 0.413      | -            | -                | -                | -         |    -4.89 | danistzz, KaiR0N-, rexxie, TruNiQ, X5G7V    |
|            1 |     3220 | 2024-11-02 | Dynamo Eclot               | L   | 0.405      | -            | -                | -                | -         |    -1.82 | danistzz, KaiR0N-, rexxie, TruNiQ, X5G7V    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,551.79)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.741 | $16,949.15     | $12,551.79      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
