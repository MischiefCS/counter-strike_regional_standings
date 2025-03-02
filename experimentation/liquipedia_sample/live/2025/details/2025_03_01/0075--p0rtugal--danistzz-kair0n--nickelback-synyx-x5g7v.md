### Roster Details<br />
Team Name: P0RTUGAL<br />
Roster: danistzz, KaiR0N-, NickelBack, synyx, X5G7V<br />
Global Rank: [75](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  887.5<br />
<br />
Final Rank Value (887.5) = Starting Rank Value (810.4) + Head To Head Adjustments (77.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.093[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 810.4
- 400 + ( ( 0.208 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 810.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1004 | 2024-12-22 | Metizport                                 | W   | 0.741      | 0.387        | 0.074 (0.021)    | 0.564 (0.162)    | 0 (0.000) |    17.02 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|           11 |     1022 | 2024-12-22 | RUSH B (Russian team)                     | W   | 0.739      | 0.387        | 0.028 (0.008)    | 0.850 (0.243)    | 0 (0.000) |    14.19 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|           10 |     1077 | 2024-12-21 | Nexus Gaming                              | W   | 0.732      | 0.387        | 0.186 (0.053)    | 0.861 (0.244)    | 0 (0.000) |    16.61 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|            9 |     1378 | 2024-12-13 | NEVERMORE (Ukrainian team)                | L   | 0.680      | -            | -                | -                | -         |   -11.21 | danistzz, glowiing, KaiR0N-, synyx, X5G7V   |
|            8 |     1384 | 2024-12-13 | ROYALS                                    | W   | 0.680      | 0.143        | 0.004 (0.000)    | 0.225 (0.022)    | 0 (0.000) |     6.43 | danistzz, glowiing, KaiR0N-, synyx, X5G7V   |
|            7 |     1392 | 2024-12-13 | VOLT (European team)                      | W   | 0.680      | 0.143        | 0.003 (0.000)    | 0.179 (0.017)    | 0 (0.000) |     6.70 | danistzz, glowiing, KaiR0N-, synyx, X5G7V   |
|            6 |     1570 | 2024-12-08 | VOLT (European team)                      | W   | 0.647      | 0.143        | 0.003 (0.000)    | 0.179 (0.017)    | 0 (0.000) |     6.73 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|            5 |     1577 | 2024-12-08 | AMKAL ESPORTS                             | W   | 0.647      | 0.143        | 0.017 (0.002)    | 0.401 (0.037)    | 0 (0.000) |     9.13 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|            4 |     1588 | 2024-12-08 | Kubix Esports                             | W   | 0.647      | 0.143        | 0.045 (0.004)    | 0.573 (0.053)    | 0 (0.000) |    12.07 | danistzz, KaiR0N-, NickelBack, synyx, X5G7V |
|            3 |     3571 | 2024-11-03 | Fire Flux Esports                         | L   | 0.413      | -            | -                | -                | -         |    -4.57 | danistzz, KaiR0N-, rexxie, TruNiQ, X5G7V    |
|            2 |     3675 | 2024-11-02 | Dynamo Eclot                              | L   | 0.405      | -            | -                | -                | -         |    -2.51 | danistzz, KaiR0N-, rexxie, TruNiQ, X5G7V    |
|            1 |     4123 | 2024-10-25 | Copenhagen Wolves (American organization) | W   | 0.351      | 0.384        | 0.016 (0.002)    | 1.000 (0.135)    | 0 (0.000) |     6.47 | danistzz, KaiR0N-, rexxie, TruNiQ, X5G7V    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,551.79)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.741 | $16,949.15     | $12,551.79      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
