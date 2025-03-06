### Roster Details<br />
Team Name: Ex-ENTERPRISE esports<br />
Roster: bajmi, Demho, Ex1st, mwlky, Sobol<br />
Global Rank: [142](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [94]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  660.7<br />
<br />
Final Rank Value (660.7) = Starting Rank Value (655.2) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.050[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.2
- 400 + ( ( 0.123 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 655.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1820 | 2024-10-26 | Illuminar Gaming  | W   | 0.111      | 0.143        | 0.004 (0.000)    | 0.161 (0.003)    | 1 (0.111) |     2.05 | bajmi, Demho, Ex1st, mwlky, Sobol |
|            4 |     1827 | 2024-10-26 | Los kogutos       | W   | 0.110      | 0.143        | 0.017 (0.000)    | 0.181 (0.003)    | 1 (0.110) |     2.40 | bajmi, Demho, Ex1st, mwlky, Sobol |
|            3 |     1831 | 2024-10-26 | Ins (Polish team) | W   | 0.109      | 0.143        | 0.001 (0.000)    | 0.002 (0.000)    | 1 (0.109) |     1.41 | bajmi, Demho, Ex1st, mwlky, Sobol |
|            2 |     1973 | 2024-10-13 | Passion UA        | L   | 0.024      | -            | -                | -                | -         |    -0.12 | bajmi, Demho, Ex1st, mwlky, Sobol |
|            1 |     1984 | 2024-10-12 | Illuminar Gaming  | L   | 0.017      | -            | -                | -                | -         |    -0.23 | bajmi, Demho, Ex1st, mwlky, Sobol |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($332.18)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.111 | $2,987.79      | $332.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
