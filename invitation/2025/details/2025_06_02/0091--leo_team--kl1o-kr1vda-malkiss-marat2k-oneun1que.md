### Roster Details<br />
Team Name: Leo Team<br />
Roster: kL1o, kr1vda, Malkiss, marat2k, OneUn1que<br />
Global Rank: [91](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [63]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  570.2<br />
<br />
Final Rank Value (570.2) = Starting Rank Value (561.8) + Head To Head Adjustments (8.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 561.8
- 400 + ( ( 0.070 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 561.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      178 | 2025-02-17 | OG                 | L   | 0.499      | -            | -                | -                | -         |    -6.99 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            7 |      181 | 2025-02-17 | Hesta              | W   | 0.499      | 0.143        | 0.000 (0.000)    | 0.423 (0.030)    | 0 (0.000) |     7.59 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            6 |      188 | 2025-02-17 | Mercenaires        | W   | 0.498      | 0.143        | 0.000 (0.000)    | 0.090 (0.006)    | 0 (0.000) |     4.56 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            5 |      195 | 2025-02-17 | Mission Possible   | W   | 0.497      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.49 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            4 |      925 | 2024-12-11 | FLuffy Gangsters   | L   | 0.045      | -            | -                | -                | -         |    -0.86 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            3 |      936 | 2024-12-10 | CYBERSHOKE Esports | L   | 0.039      | -            | -                | -                | -         |    -0.24 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            2 |      963 | 2024-12-08 | 500                | L   | 0.025      | -            | -                | -                | -         |    -0.08 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            1 |     1015 | 2024-12-06 | FAVBET Team        | L   | 0.011      | -            | -                | -                | -         |    -0.10 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($207.61)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.085 | $1,197.67      | $101.30         |
| 2024-12-08 |      0.025 | $4,300.00      | $106.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
