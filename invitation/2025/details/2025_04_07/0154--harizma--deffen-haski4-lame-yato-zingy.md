### Roster Details<br />
Team Name: Harizma<br />
Roster: deffen, Haski4, lame, yato, ZinGY<br />
Global Rank: [154](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [99]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  644.2<br />
<br />
Final Rank Value (644.2) = Starting Rank Value (654.0) + Head To Head Adjustments (-9.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.248[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.0
- 400 + ( ( 0.123 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 654.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      473 | 2025-02-08 | TYLOO                     | L   | 0.809      | -            | -                | -                | -         |   -10.35 | deffen, Haski4, lame, yato, ZinGY   |
|            8 |     1042 | 2024-12-05 | Chinggis Warriors         | W   | 0.376      | 0.333        | 0.010 (0.001)    | 0.522 (0.065)    | 0 (0.000) |     6.79 | deffen, Geneka, Haski4, lame, ZinGY |
|            7 |     1051 | 2024-12-05 | DogEvil                   | L   | 0.376      | -            | -                | -                | -         |    -7.99 | deffen, Geneka, Haski4, lame, ZinGY |
|            6 |     1054 | 2024-12-04 | Chinggis Warriors         | W   | 0.375      | 0.333        | 0.010 (0.001)    | 0.522 (0.065)    | 0 (0.000) |     6.77 | deffen, Geneka, Haski4, lame, ZinGY |
|            5 |     1323 | 2024-11-21 | CatEvil                   | L   | 0.289      | -            | -                | -                | -         |    -6.28 | deffen, Geneka, Haski4, lame, ZinGY |
|            4 |     1346 | 2024-11-20 | Just Swing (Chinese team) | L   | 0.282      | -            | -                | -                | -         |    -4.30 | deffen, Geneka, Haski4, lame, ZinGY |
|            3 |     1352 | 2024-11-20 | Ex-GR Gaming              | W   | 0.282      | 0.333        | 0.007 (0.001)    | 0.035 (0.003)    | 0 (0.000) |     4.86 | deffen, Geneka, Haski4, lame, ZinGY |
|            2 |     1942 | 2024-10-16 | The Huns Esports          | L   | 0.043      | -            | -                | -                | -         |    -0.30 | deffen, Haski4, lame, Sange, ZinGY  |
|            1 |     1964 | 2024-10-15 | Gods Reign                | W   | 0.036      | 0.417        | 0.016 (0.000)    | 0.329 (0.005)    | 1 (0.036) |     0.94 | deffen, Haski4, lame, Sange, ZinGY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($211.19)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.162 | $1,300.00      | $211.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
